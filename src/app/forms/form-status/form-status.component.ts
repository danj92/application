import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.scss']
})
export class FormStatusComponent implements OnInit {

  @Input('form') formGroup: FormGroup;

  @HostListener('click')
  submitForm() {
    // this.formGroup.markAsTouched();
    // console.log(this.formGroup.value);
  }


  constructor() { }

  ngOnInit() {
  }



}
