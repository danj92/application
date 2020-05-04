import { Directive, TemplateRef, Input, HostListener, ElementRef } from '@angular/core';
import { MenuOptions, WidthStrategy, MenuSize, ScrollStrategy } from './menu.interface';
import { MenuService } from './menu.service';
import { SimpleMenuComponent } from './simple-menu/simple-menu.component';

@Directive({ selector: '[appMenu]' })
export class MenuDirective {
  @Input('appMenu') templateRef: TemplateRef<any>;

  @Input() menuOptions: MenuOptions;

  @Input() widthStrategy: WidthStrategy = 'fixed';

  @Input() size: MenuSize = 'small';

  @Input() width: number;

  @Input() height: number;

  @Input() animationsEnabled = true;

  @Input() scrollStrategy: ScrollStrategy = 'close';

  menuComponent: SimpleMenuComponent;

  constructor(
    private menuService: MenuService,
    private elementRef: ElementRef<HTMLElement>,
  ) {}

  @HostListener('click', ['$event'])
  async onClick(event: MouseEvent) {
    event.stopPropagation();

    if (this.menuComponent) {
      this.menuComponent.hide();
      return;
    }

    if (!this.menuOptions) {
      this.menuOptions = {
        size: this.size,
        widthStrategy: this.widthStrategy,
        animationsEnabled: this.animationsEnabled,
        scrollStrategy: this.scrollStrategy,
        overlayConfig: {
          width: this.width,
          height: this.height,
        },
      };
    }

    const menuOptions: MenuOptions = {
      connectTo: this.elementRef.nativeElement,
      ...this.menuOptions,
    };

    this.menuComponent = this.menuService.open(this.templateRef, menuOptions);

    await this.menuComponent.closingPromise;

    this.menuComponent = null;
  }
}
