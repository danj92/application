import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import { ValidationMessages } from './validation-messages';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioOptionComponent, RadioGroupComponent } from './radio-group';

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
