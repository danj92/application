import { Highlightable } from '@angular/cdk/a11y';
import { Component, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

import { CustomDropdownService } from '../custom-dropdown.service';
import { CustomSelectComponent } from '../custom-select/custom-select.component';

@Component({
  selector: 'app-custom-select-option',
  templateUrl: './custom-select-option.component.html',
  styleUrls: ['./custom-select-option.component.scss'],
})
export class CustomSelectOptionComponent implements Highlightable {
  @Input()
  public key: string;

  @Input()
  public value: string;

  private select: CustomSelectComponent;

  @HostBinding('class.selected')
  public get selected(): boolean {
    return this.select.selectedOption === this;
  }

  @HostBinding('class.active')
  public active = false;

  @HostListener('click', ['$event'])
  public onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.select.selectOption(this);
  }

  constructor(
    private customDropdownService: CustomDropdownService,
    private hostElement: ElementRef,
  ) {
    this.select = this.customDropdownService.getSelect();
  }

  public setActiveStyles(): void {
    this.active = true;
  }

  public setInactiveStyles(): void {
    this.active = false;
  }

  get optionComponentHeight() {
    return this.hostElement.nativeElement.offsetHeight;
  }
}
