import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { RequestsResolverService } from './requests.resolver.service';
import { UIModule } from '../ui/ui.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, DashboardRoutingModule, UIModule],
  providers: [RequestsResolverService],
})
export class DashboardModule { }
