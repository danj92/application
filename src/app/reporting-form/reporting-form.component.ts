import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { wrapApiFormPost } from '../forms/form-helpers';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-reporting-form',
  templateUrl: './reporting-form.component.html',
  styleUrls: ['./reporting-form.component.scss'],
})
export class ReportingFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      requestName: ['', []],
      requestor: ['', []],
      goodEnding: ['', []],
      description: ['', []],
      needStoryteller: ['', []],
      storyteller: ['', []],
      wantedCharacters: ['', []],
      deadline: ['', []],
      budget: ['', []],
      status: ['', []],
    });
  }

  // Request name:
  // Requestor:
  // Good ending:
  // Description:
  // Need storyteller:
  // Storyteller:
  // Wanted characters:
  // Deadline:
  // Budget:
  // Status:

  // Cancel
  // Save as draft
  // Submit

  async reportingForm() {
    try {
      const sendForm = await wrapApiFormPost(this.formGroup, () =>
        this.api.peoples.get('users'),
      );
      console.log(this.formGroup);
    } catch (e) {}
  }
}
