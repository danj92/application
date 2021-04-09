import {
  AfterViewInit,
  Component,
  forwardRef,
  HostBinding,
  HostListener,
  Injector,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { isControlRequired } from '../custom-control-helper';
import { CustomSelectComponent } from '../custom-dropdown/custom-select/custom-select.component';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimepickerComponent),
      multi: true,
    },
  ],
})
export class TimepickerComponent
  implements OnInit, AfterViewInit, ControlValueAccessor {
  static minutes: string[] = [...Array(60).keys()].map(p =>
    p.toString().padStart(2, '0'),
  );

  static hours: string[] = [...Array(24).keys()].map(p =>
    p.toString().padStart(2, '0'),
  );

  constructor(private fb: FormBuilder, private injector: Injector) {}

  get minutes() {
    return TimepickerComponent.minutes.filter(
      minute => Number(minute) % this.minuteStep === 0,
    );
  }

  get hours() {
    return TimepickerComponent.hours;
  }

  formGroup: FormGroup;

  private control: FormControl;

  public disabled = false;

  @Input() label = 'Godzina';

  @Input() minuteStep = 1;

  @ViewChildren('select') select: QueryList<CustomSelectComponent>;

  @HostBinding('class.required')
  public required = false;

  @HostListener('focus')
  // handling keyboard events Tab(tabindex). Add tabindex="0" to focus element
  focusSelect() {
    this.select.first.focusInput();
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      hour: [''],
      minutes: [''],
    });
    this.formGroup.valueChanges.subscribe(val => {
      const stillEmpty = val.hour === '' || val.minutes === '';
      if (!stillEmpty) {
        const time = `${val.hour}:${val.minutes}`;
        this.onChange(time);
      }
      this.onTouched();
    });
  }

  public ngAfterViewInit() {
    const ngControl: NgControl = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
      setTimeout(() => {
        this.required = isControlRequired(this.control);
      });
    }
  }

  onChange = (_time: any) => {
    /*Empty*/
  };

  onTouched = () => {
    /*Empty*/
  };

  onTouchedSelect() {
    this.onTouched();
  }

  writeValue(value) {
    if (value) {
      const hour = value.trim().slice(0, 2);
      const minutes = value.trim().slice(-2);
      const time = { hour, minutes };
      this.formGroup.setValue(time);
    } else {
      const time = { hour: '', minutes: '' };
      this.formGroup.setValue(time);
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
