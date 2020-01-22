import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../core/toast.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private toast: ToastService) {}

  ngOnInit() {}

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
    console.log(this.formGroup);
  }
}
