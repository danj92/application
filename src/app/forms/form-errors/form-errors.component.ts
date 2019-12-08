import {
  Component,
  OnDestroy,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { ValidationMessages } from '../validation-messages';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorsComponent implements OnDestroy {
  private _formControl: FormControl;

  subscription = new Subscription();

  errors = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private validationMsg: ValidationMessages,
  ) { }

  ngOnDestroy() {
    this.clearSubscription();
  }

  clearSubscription() {
    this.subscription.unsubscribe();
  }

  @Input('control') set formControl(formControl: FormControl) {
    console.log('No run');

    this._formControl = formControl;
    this.computeErrors();
    this.subscription.add(
      this.formControl.statusChanges.subscribe(() => this.computeErrors()),
    );
  }

  get formControl() {
    return this._formControl;
  }

  computeErrors() {
    if (this.formControl.touched && this.formControl.errors) {
      this.errors = Object.keys(this.formControl.errors).map(e => {
        const error = this.formControl.errors[e];
        return this.validationMsg[e] ? this.validationMsg[e](error) : error;
      });
    } else {
      this.errors = [];
    }
    this.cdr.markForCheck();
  }
}
