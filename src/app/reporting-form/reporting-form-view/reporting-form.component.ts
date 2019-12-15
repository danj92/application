import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { wrapApiFormPost, FormValidationError } from '../../forms/form-helpers';
import { ApiService } from '../../core/api.service';
import { Router } from '@angular/router';
import { ToastService } from '../../core/toast.service';
import { ReportingFormService } from '../reporting-form.service';
import { Request } from '../../interface/request.interface';

@Component({
  selector: 'app-reporting-form',
  templateUrl: './reporting-form.component.html',
  styleUrls: ['./reporting-form.component.scss'],
})
export class ReportingFormComponent implements OnInit {

  @Input() preview = false;

  @Input() request: Request[];

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reportingFormService: ReportingFormService,
    private api: ApiService,
    private router: Router,
    private toast: ToastService,
  ) { }

  ngOnInit() {
    this.formGroup = this.reportingFormService.createForm();
    // if (this.preview) {
    //   this.reportingFormService.fillForm(this.request[0]);
    //   this.formGroup.disable();
    // }
  }

  get needStoryteller() {
    return this.formGroup.get('needStoryteller').value;
  }

  saveAsDraft() {
    this.formGroup.controls.status.setValue('draft');
    this.router.navigate(['/']);
  }

  cancel() {
    this.formGroup.reset();
    this.router.navigate(['/']);
  }

  async createRequest() {
    try {
      await wrapApiFormPost(this.formGroup, () =>
        this.api.requests.create(this.formGroup.value),
      );
      this.toast.success('Request is created');
      this.router.navigate(['/']);
    } catch (e) {
      if (!(e instanceof FormValidationError)) {
        this.toast.error('Request is not created');
        throw e;
      }
      return;
    }
  }
}
