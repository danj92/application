import { NgModule } from '@angular/core';
import { PlaygroundComponent } from './playground.component';
import { RouterModule } from '@angular/router';
import { playgrounRoutes } from './playground.routing';
import { SharedModule } from '../shared/shared.module';
import { UseModalComponent } from './use-modal/use-modal.component';
import { UseSelectComponent } from './use-select/use-select.component';
import { SimpleMenuModule } from '../simple-menu/simple-menu.module';
import { AppFormsModule } from '../forms';
import { UseColorsComponent } from './use-colors/use-colors.component';

@NgModule({
  imports: [
    SharedModule,
    SimpleMenuModule,
    AppFormsModule,
    RouterModule.forChild(playgrounRoutes),
  ],
  declarations: [PlaygroundComponent, UseModalComponent, UseSelectComponent, UseColorsComponent],
})
export class PlaygroundModule {}
