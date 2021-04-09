import { Directive, HostListener, Input, HostBinding } from '@angular/core';

import { MenuService } from './menu.service';

@Directive({ selector: '[appMenuItem]' })
export class MenuItemDirective {
  private _isDisabled = false;

  constructor(private menuService: MenuService) {}

  @Input()
  set itemDisabled(isDisabled: boolean) {
    this._isDisabled = isDisabled;
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this._isDisabled;
  }

  get isEnabled() {
    return !this.isDisabled;
  }

  @HostListener('click', ['$event'])
  onClick() {
    if (!this.isDisabled) {
      this.menuService.hide();
    }
  }
}
