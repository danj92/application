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
  formGroup1: FormGroup;
  formGroup2: FormGroup;

  @ViewChild('form1', { static: true }) form1: ElementRef<HTMLFormElement>;

  @ViewChild('form2', { static: true }) form2: ElementRef<HTMLFormElement>;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.formGroup1 = this.fb.group({
      name1: ['', [Validators.required]],
      name2: ['', [Validators.required, Validators.minLength(5)]],
    });

    this.formGroup2 = this.fb.group({
      name11: ['', [Validators.required]],
      name22: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  async reportingForm1() {
    console.log(this.formGroup1.value);
    try {
      const sendForm = await wrapApiFormPost(
        this.formGroup1,
        () => this.api.peoples.get('users'),
        { parentElement: this.form1.nativeElement }
      );
    } catch (e) {

    }
  }

  async reportingForm2() {
    console.log(this.formGroup2.value);
    try {
      const sendForm = await wrapApiFormPost(
        this.formGroup2,
        () => this.api.peoples.get('users'),
        { parentElement: this.form2.nativeElement }
      );
    } catch (e) {

    }
  }
}
