import { AfterViewInit, Component, HostBinding, Injector } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { isControlRequired } from '../custom-control-helper';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomCheckboxComponent,
      multi: true,
    },
  ],
})
export class CustomCheckboxComponent implements ControlValueAccessor, AfterViewInit {
  @HostBinding('class.required')
  public required = false;

  checked = false;

  private control: FormControl;

  constructor(private injector: Injector) {}

  ngAfterViewInit() {
    const ngControl: NgControl = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
      setTimeout(() => {
        this.required = isControlRequired(this.control);
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = _ => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(checked: boolean) {
    this.checked = checked;
  }

  onModelChange(e: boolean) {
    this.checked = e;
    this.onChange(e);
    this.onTouched();
  }
}
