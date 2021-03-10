import {
  Component,
  OnInit,
  forwardRef,
  HostBinding,
  Input,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor, OnInit {
  @Input()
  public label: string;

  @ViewChild('input', { static: true, read: ElementRef })
  inputElementRef: ElementRef;

  onChange = _ => {};
  onTouched = () => {};

  constructor(private _renderer: Renderer2) {}

  ngOnInit() {}

  writeValue(value: string) {
    this._renderer.setProperty(this.inputElementRef.nativeElement, 'value', value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(
      this.inputElementRef.nativeElement,
      'disabled',
      isDisabled,
    );
  }

  onBlur() {
    this.onTouched();
  }

  onInputChange() {
    const value = this.inputElementRef.nativeElement.value;
    this.onChange(value);
  }
}
