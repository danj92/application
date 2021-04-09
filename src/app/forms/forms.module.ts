import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import { InputComponent } from './input/input.component';
import { RadioOptionComponent, RadioGroupComponent } from './radio-group';
import { ValidationMessages } from './validation-messages';

const COMPONENTS = [
  InputComponent,
  FormErrorsComponent,
  CheckboxComponent,
  RadioOptionComponent,
  RadioGroupComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [ValidationMessages],
})
export class AppFormsModule {}
