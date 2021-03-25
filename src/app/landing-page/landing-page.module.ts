// import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppFormsModule } from '../forms';
import { SharedModule } from '../shared/shared.module';
import { UIModule } from '../ui/ui.module';
import { LandingPageApiService } from './landing-page-api-service';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page.routing';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    LandingPageRoutingModule,
    UIModule,
    SharedModule,
    AppFormsModule,
    // HttpClientModule,
  ],
  providers: [LandingPageApiService],
})
export class LandingPageModule {}
