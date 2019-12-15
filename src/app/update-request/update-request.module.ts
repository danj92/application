import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateRequestComponent } from './update-request-view/update-request.component';
import { UpdateRequestRoutingModule } from './update-request.routing';
import { ReportingFormModule } from '../reporting-form/reporting-form.module';
import { UpdateRequestResolverService } from './update-request.resolver.service';
import { SharedModule } from '../shared/shared.module';
import { AppFormsModule } from '../forms';
import { UsersResolverService } from './users.serolver.service';

@NgModule({
  declarations: [UpdateRequestComponent],
  imports: [
    CommonModule,
    UpdateRequestRoutingModule,
    ReportingFormModule,
    SharedModule,
    AppFormsModule
  ],
  providers: [UpdateRequestResolverService, UsersResolverService]
})
export class UpdateRequestModule { }
