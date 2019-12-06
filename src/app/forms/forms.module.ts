import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import { ValidationMessages } from './validation-messages';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormStatusComponent } from './form-status/form-status.component';

const COMPONENTS = [
  InputComponent,
  FormErrorsComponent,
  CheckboxComponent,
  FormStatusComponent
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [ValidationMessages],
})
export class AppFormsModule { }
