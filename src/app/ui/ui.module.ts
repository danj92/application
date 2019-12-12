import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SimpleMenuModule } from '../simple-menu/simple-menu.module';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationService } from './pagination/pagination.service';
import { SharedModule } from '../shared/shared.module';
import { NoResultsComponent } from './no-results/no-results.component';
import { AppFormsModule } from '../forms';

const COMPONENTS = [
  TopBarComponent,
  FooterComponent,
  ProgressBarComponent,
  PaginationComponent,
  NoResultsComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    SimpleMenuModule,
    SharedModule,
    AppFormsModule,
  ],
  exports: [COMPONENTS],
  providers: [PaginationService],
})
export class UIModule {}
