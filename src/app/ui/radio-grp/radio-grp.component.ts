import {
  Component,
  HostBinding,
  Injector,
  Input,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface RadioItem {
  name: string;
  value: string;
}

@Component({
  selector: 'app-radio-grp',
  templateUrl: './radio-grp.component.html',
  styleUrls: ['./radio-grp.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioGrpComponent,
      multi: true,
    },
  ],
})
export class RadioGrpComponent implements ControlValueAccessor {
  @Input() items: Array<RadioItem>;
  @Input() label: string;
  @Input() name: string;

  @ViewChildren('radio') radio: QueryList<any>;

  @HostBinding('class.disabled')
  public isDisabled = false;

  value: string;

  constructor() {}

  onChange = _ => {};
  onTouched = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: string) {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleChange(event) {
    this.onChange(event);
    this.onTouched();
  }
}
