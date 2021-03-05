import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Injector,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { isControlRequired } from '../../custom-control-helper';
import { CustomDropdownService } from '../custom-dropdown.service';
import { CustomSelectOptionComponent } from '../custom-select-option/custom-select-option.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
    CustomDropdownService,
  ],
})
export class CustomSelectComponent implements AfterViewInit, ControlValueAccessor {
  @Input()
  public label: string;

  @Input()
  public placeholder: string;

  @Input()
  public selected: string;

  @Input()
  public overlayClass: string;

  @Input()
  public disabledControl = false;

  @Input()
  public showIcon = true;

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.disabledControl;
  }

  @HostBinding('class.required')
  public required = false;

  @ViewChild('input')
  public input: ElementRef;

  @ViewChild(DropdownComponent)
  public dropdown: DropdownComponent;

  @ViewChild('dropdownRef')
  public dropdownRef: ElementRef;

  @ContentChildren(CustomSelectOptionComponent)
  public options: QueryList<CustomSelectOptionComponent>;

  @Output() blurInput = new EventEmitter<void>();

  public selectedOption: CustomSelectOptionComponent;

  public displayText: string;

  private keyManager: ActiveDescendantKeyManager<CustomSelectOptionComponent>;

  private control: FormControl;

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (this.input.nativeElement.contains(event.target)) {
      this.renderer.addClass(this.input.nativeElement, 'highlighted-selection');
    } else {
      this.renderer.removeClass(this.input.nativeElement, 'highlighted-selection');
    }
  }

  constructor(
    private customDropdownService: CustomDropdownService,
    private injector: Injector,
    private renderer: Renderer2,
  ) {
    this.customDropdownService.register(this);
  }

  public onChangeFn = (_: any) => {
    /*Empty*/
  };

  public onTouchedFn = () => {
    /*Empty*/
  };

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabledControl = isDisabled;
  }

  public writeValue(obj: any): void {
    this.selected = obj;
    this.displaySelectOptionText();
  }

  public onTouched() {
    this.onTouchedFn();
  }

  public onChange() {
    this.onChangeFn(this.selected);
  }

  private displaySelectOptionText() {
    if (this.options) {
      this.selectedOption = this.options
        .toArray()
        .find(option => option.key.toString() === this.selected.toString());
    }
    this.displayText = this.selectedOption ? this.selectedOption.value : '';
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.displaySelectOptionText();

      this.keyManager = new ActiveDescendantKeyManager(this.options)
        .withHorizontalOrientation('ltr')
        .withVerticalOrientation()
        .withWrap();
    });
    const ngControl: NgControl = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
      setTimeout(() => {
        this.required = isControlRequired(this.control);
      });
    }
  }

  public focusInput() {
    this.input.nativeElement.focus();
  }

  public onHideDropdown() {
    // forward dropdown componen blur event
    this.blurInput.next();
    this.onTouched();
  }

  public showDropdown() {
    this.dropdown.show();
    this.renderer.addClass(this.input.nativeElement, 'highlighted-selection');

    if (!this.options.length) {
      return;
    }

    if (this.selected) {
      this.keyManager.setActiveItem(this.selectedOption);
      this.updateScrollTop();
    } else {
      this.keyManager.setFirstItemActive();
    }
  }

  public onDropMenuIconClick(event: UIEvent) {
    event.stopPropagation();
    this.input.nativeElement.focus();
    this.input.nativeElement.click();
  }

  public selectOption(option: CustomSelectOptionComponent) {
    this.keyManager.setActiveItem(option);
    this.selected = option.key;
    this.selectedOption = option;
    this.displayText = this.selectedOption ? this.selectedOption.value : '';
    this.onChange();
    this.hideDropdown();
    this.input.nativeElement.focus();
  }

  public hideDropdown() {
    this.renderer.removeClass(this.input.nativeElement, 'highlighted-selection');
    this.dropdown.hide();
  }

  private getOptionComponentHeight() {
    // dynamically return height of the selected item component
    return this.options.toArray()[0].optionComponentHeight;
  }

  private calculateNewScrollTop(
    windowHeight,
    windowTop,
    itemHeight,
    itemIndex,
  ): number {
    const itemTop = itemIndex * itemHeight;
    const itemBottom = itemTop + itemHeight;
    const windowBottom = windowTop + windowHeight;

    if (itemTop >= windowTop && itemBottom <= windowBottom) {
      // fits inside window, do nothing
      return windowTop;
    } else {
      // need to recalculate new window top position
      if (itemTop >= windowTop) {
        return itemTop;
      } else {
        return itemBottom - windowHeight;
      }
    }
  }

  private updateScrollTop(): void {
    const window = this.dropdown.instance;
    const index = this.keyManager.activeItemIndex;
    const itemHeight = this.getOptionComponentHeight();
    const windowHeight = window.offsetHeight;

    window.scrollTop = this.calculateNewScrollTop(
      windowHeight,
      window.scrollTop,
      itemHeight,
      index,
    );
  }

  public onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        if (!this.dropdown.showing) {
          this.showDropdown();
          break;
        }
        this.selectedOption = this.keyManager.activeItem;
        this.selected = this.keyManager.activeItem.key;
        this.displayText = this.selectedOption ? this.selectedOption.value : '';
        this.hideDropdown();
        this.onChange();
        break;

      case 'Escape':
        if (this.dropdown.showing) {
          this.hideDropdown();
          event.stopPropagation();
        }
        break;

      case 'Tab':
        if (this.dropdown.showing) {
          this.hideDropdown();
        }
        break;

      case 'ArrowUp':
        this.keyManager.setPreviousItemActive();
        this.updateScrollTop();
        break;

      case 'ArrowDown':
        if (!this.dropdown.showing) {
          this.showDropdown();
          break;
        }
        this.keyManager.setNextItemActive();
        this.updateScrollTop();
        break;
    }
  }
}
