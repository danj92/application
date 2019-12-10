import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { wrapApiFormPost } from '../forms/form-helpers';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';
import { ToastService } from '../core/toast.service';

@Component({
  selector: 'app-reporting-form',
  templateUrl: './reporting-form.component.html',
  styleUrls: ['./reporting-form.component.scss'],
})
export class ReportingFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private toast: ToastService,
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      requestName: ['', [Validators.required, Validators.maxLength(255)]],
      requestor: ['', [Validators.required]],
      goodEnding: ['true', [Validators.required]],
      description: ['', [Validators.required]],
      needStoryteller: [false],
      storyteller: ['', []],
      wantedCharacters: ['', []],
      deadline: [new Date(), []],
      budget: ['', [Validators.required, Validators.min(250000)]],
      status: ['new', []],
    });

    console.log(this.formGroup.value.needStoryteller.value)
  }

  get needStoryteller() {
    return this.formGroup.get('needStoryteller').value;
  }

  saveAsDraft() {
    this.formGroup.controls.status.setValue('draft');
    // create request to api
    console.log(this.formGroup.value);
    this.router.navigate(['/']);
  }

  cancel() {
    this.formGroup.reset();
    this.router.navigate(['/']);
  }
  async reportingForm() {
    try {
      await wrapApiFormPost(this.formGroup, () =>
        this.api.requests.newRequests(this.formGroup.value)
      );
      // this.api.requests.newRequests(this.formGroup.value);
      this.toast.success(`Hi, A new request has been creates by ..... Cheers, Story Team`);
      console.log(this.formGroup.value);
      this.router.navigate(['/']);
    } catch (e) { }
  }
}
