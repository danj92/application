import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReportingFormComponent } from './reporting-form.component';
import { ReportingFormRoutingModule } from './reporting-form.routing';
import { AppFormsModule } from '../forms';

@NgModule({
  declarations: [ReportingFormComponent],
  imports: [
    SharedModule,
    ReportingFormRoutingModule,
    AppFormsModule
  ]
})
export class ReportingFormModule { }
