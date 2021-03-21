import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ToastService } from '../core/toast.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
  formGroup: FormGroup;

  constructor(private toast: ToastService) {}

  toastInfo() {
    this.toast.info('Info');
  }

  toastSuccess() {
    this.toast.success('Success');
  }

  toastWarning() {
    this.toast.warning('Warning');
  }

  submitForm() {
    // eslint-disable-next-line no-console
    console.log(this.formGroup);
  }
}
