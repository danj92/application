import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Request } from '../interface/request.interface';

@Injectable()
export class ReportingFormService {
  constructor(private fb: FormBuilder) { }

  formGroup: FormGroup;

  createForm() {
    this.formGroup = this.fb.group({
      requestName: [''],
      requestor: [''],
      goodEnding: ['true'],
      description: [''],
      needStoryteller: [false],
      storyteller: ['', []],
      wantedCharacters: ['', []],
      deadline: [new Date(), []],
      budget: ['', [Validators.required]],
      status: ['new', []],
    });
    return this.formGroup;
  }

  // fillForm(request: Request) {
  //   this.formGroup.patchValue({
  //     requestName: request.requestName,
  //     requestor: request.requestor,
  //     goodEnding: request.goodEnding,
  //     description: request.description,
  //     needStoryteller: request.needStoryteller,
  //     storyteller: request.storyteller,
  //     wantedCharacters: request.wantedCharacters,
  //     deadline: request.deadline,
  //     budget: request.budget,
  //     status: request.status,
  //   });
  // }
}
