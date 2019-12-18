import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReportingFormComponent } from './reporting-form-view/reporting-form.component';
import { ReportingFormRoutingModule } from './reporting-form.routing';
import { AppFormsModule } from '../forms';
import { ReportingFormService } from './reporting-form.service';

@NgModule({
  declarations: [ReportingFormComponent],
  imports: [
    SharedModule,
    ReportingFormRoutingModule,
    AppFormsModule,
  ],
  exports: [ReportingFormComponent],
  providers: [ReportingFormService]
})
export class ReportingFormModule { }
