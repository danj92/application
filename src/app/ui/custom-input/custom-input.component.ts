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
export class CustomInputComponent implements ControlValueAccessor {
  onChange = _ => {};
  onTouched = () => {};

  @ViewChild('input', { static: true, read: ElementRef })
  inputElementRef: ElementRef;

  constructor(private _renderer: Renderer2) {}

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
    console.log('value', value);
    this.onChange(value);
  }
}
