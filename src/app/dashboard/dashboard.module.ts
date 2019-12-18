import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { UIModule } from '../ui/ui.module';

import { AppFormsModule } from '../forms';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, DashboardRoutingModule, UIModule, AppFormsModule],
  providers: [],
})
export class DashboardModule { }
