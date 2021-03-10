import { NgModule } from '@angular/core';
import { PlaygroundComponent } from './playground.component';
import { RouterModule } from '@angular/router';
import { playgrounRoutes } from './playground.routing';
import { SharedModule } from '../shared/shared.module';
import { UseModalComponent } from './use-modal/use-modal.component';
import { SimpleMenuModule } from '../simple-menu/simple-menu.module';
import { AppFormsModule } from '../forms';
import { UseColorsComponent } from './use-colors/use-colors.component';
import { UIModule } from '../ui/ui.module';
import { UseButtonsComponent } from './use-buttons/use-buttons.component';
import { UseIconsComponent } from './use-icons/use-icons.component';
import { UseMenuComponent } from './use-menu/use-menu.component';
import { UseSpinnersComponent } from './use-spinners/use-spinners.component';
import { UseFormsComponent } from './use-forms/use-forms.component';
import { UseTypographyComponent } from './use-typography/use-typography.component';
import { UseTabsComponent } from './use-tabs/use-tabs.component';
import { UseTableComponent } from './use-table/use-table.component';
import { UseStepperComponent } from './use-stepper/use-stepper.component';
import { UseScheduleComponent } from './use-schedule/use-schedule.component';
import { UseCustomSelectComponent } from './use-custom-select/use-custom-select.component';
import { UseCollapsableTextComponent } from './use-collapsable-text/use-collapsable-text.component';
import { UseTooltipComponent } from './use-tooltip/use-tooltip.component';
import { UseTimepickerComponent } from './use-timepicker/use-timepicker.component';
import { UseCustomInputComponent } from './use-custom-input/use-custom-input.component';

@NgModule({
  imports: [
    SharedModule,
    SimpleMenuModule,
    AppFormsModule,
    RouterModule.forChild(playgrounRoutes),
    UIModule,
  ],
  declarations: [
    PlaygroundComponent,
    UseModalComponent,
    UseColorsComponent,
    UseButtonsComponent,
    UseIconsComponent,
    UseMenuComponent,
    UseSpinnersComponent,
    UseFormsComponent,
    UseTypographyComponent,
    UseTabsComponent,
    UseTableComponent,
    UseStepperComponent,
    UseScheduleComponent,
    UseCustomSelectComponent,
    UseCollapsableTextComponent,
    UseTooltipComponent,
    UseTimepickerComponent,
    UseCustomInputComponent,
  ],
})
export class PlaygroundModule {}
