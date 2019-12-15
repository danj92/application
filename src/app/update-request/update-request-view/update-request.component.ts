import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Request } from '../../interface/request.interface';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../../core/toast.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReportingFormService } from 'src/app/reporting-form/reporting-form.service';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.scss']
})
export class UpdateRequestComponent implements OnInit {

  formGroup: FormGroup;

  request: Request;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private toast: ToastService,
    private reportingFormService: ReportingFormService
  ) {
  }

  ngOnInit() {
    this.formGroup = this.reportingFormService.createForm();
    this.request = this.route.snapshot.data.request[0];
    const user: User = this.route.snapshot.data.user;

    const isOwner = user.roles.includes('Owner');
    this.fillForm(this.request);

    if (!isOwner) {
      this.formGroup.disable();
    }
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

}
