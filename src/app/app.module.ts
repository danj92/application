import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { UIModule } from './ui/ui.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppFormsModule } from './forms';


@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    UIModule,
    AppFormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
