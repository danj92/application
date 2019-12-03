import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SimpleMenuModule } from '../simple-menu/simple-menu.module';

const COMPONENTS = [TopBarComponent, FooterComponent, ProgressBarComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, RouterModule, SimpleMenuModule],
  exports: [COMPONENTS],
})
export class UIModule {}
