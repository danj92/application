import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../../core/toast.service';
import { FormGroup } from '@angular/forms';
import { ReportingFormService } from 'src/app/reporting-form/reporting-form.service';
import { User } from 'src/app/interface/user.interface';
import { Request } from '../../interface/request.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.scss']
})
export class UpdateRequestComponent implements OnInit {

  formGroup: FormGroup;

  request: Request;

  user: User;

  requestId: number;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
    private reportingFormService: ReportingFormService
  ) {
  }

  ngOnInit() {
    this.formGroup = this.reportingFormService.createForm();
    this.request = this.route.snapshot.data.request[0];
    this.user = this.route.snapshot.data.user;
    this.requestId = this.request.id;

    this.fillForm(this.request);

    if (!this.isOwner) {
      this.formGroup.disable();
    }
  }

  get isOwner() {
    return this.user.roles.includes('Owner');
  }

  fillForm(request: Request) {
    this.formGroup.patchValue({
      requestName: request.requestName,
      requestor: request.requestor,
      goodEnding: request.goodEnding,
      description: request.description,
      needStoryteller: request.needStoryteller,
      storyteller: request.storyteller,
      wantedCharacters: request.wantedCharacters,
      deadline: request.deadline,
      budget: request.budget,
      status: request.status,
    });
  }

  updateRequest(id: number, value: Request) {
    try {
      this.api.requests.update(id, value);
      this.toast.success('Update request');
      this.router.navigate(['/']);
    } catch (e) {
      this.toast.error('Failed to update request');
    }

  }

  saveAsDraft() {
    this.formGroup.controls.status.setValue('draft');
    this.router.navigate(['/']);
    this.updateRequest(this.request.id, this.formGroup.value);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
