import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportingFormComponent } from './reporting-form-view/reporting-form.component';

export const reportingForm: Routes = [
  {
    path: '',
    component: ReportingFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(reportingForm)],
  exports: [RouterModule],
})

export class ReportingFormRoutingModule { }
