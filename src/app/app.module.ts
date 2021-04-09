import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppFormsModule } from './forms';
import { SharedModule } from './shared/shared.module';
import { UIModule } from './ui/ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    UIModule,
    AppFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
