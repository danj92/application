import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { UIModule } from '../ui/ui.module';

import { RequestsResolverService } from './requests.resolver.service';
import { AllRequestsResolverService } from './all-requests.resolver.service';
import { AppFormsModule } from '../forms';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, DashboardRoutingModule, UIModule, AppFormsModule],
  providers: [RequestsResolverService, AllRequestsResolverService],
})
export class DashboardModule { }