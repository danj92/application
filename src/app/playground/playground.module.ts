import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { AppFormsModule } from '../forms';
import { SharedModule } from '../shared/shared.module';
import { SimpleMenuModule } from '../simple-menu/simple-menu.module';
import { UIModule } from '../ui/ui.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CustomMatChipListComponent } from './custom-mat-chip-list/custom-mat-chip-list.component';

import { PlaygroundComponent } from './playground.component';
import { playgrounRoutes } from './playground.routing';
import { UseButtonsComponent } from './use-buttons/use-buttons.component';
import { UseCheckboxComponent } from './use-checkbox/use-checkbox.component';
import { UseCollapsableTextComponent } from './use-collapsable-text/use-collapsable-text.component';
import { UseColorsComponent } from './use-colors/use-colors.component';
import { UseControlsComponent } from './use-controls/use-controls.component';
import { UseCustomInputComponent } from './use-custom-input/use-custom-input.component';
import { UseCustomMatChipListComponent } from './use-custom-mat-chip-list/use-custom-mat-chip-list.component';
import { UseCustomSelectComponent } from './use-custom-select/use-custom-select.component';
import { UseFunnelComponent } from './use-funnel/use-funnel.component';
import { UseIconsComponent } from './use-icons/use-icons.component';
import { UseMenuComponent } from './use-menu/use-menu.component';
import { UseModalComponent } from './use-modal/use-modal.component';
import { UsePaginationUserApiService } from './use-pagination/use-pagination-user-api-service';
import { UsePaginationUserService } from './use-pagination/use-pagination-user.service';
import { UsePaginationUsersResolve } from './use-pagination/use-pagination-users.resolver';
import { UsePaginationComponent } from './use-pagination/use-pagination.component';
import { UseRadioComponent } from './use-radio/use-radio.component';
import { UseScheduleComponent } from './use-schedule/use-schedule.component';
import { UseSpinnersComponent } from './use-spinners/use-spinners.component';
import { UseStepperComponent } from './use-stepper/use-stepper.component';
import { UseTableComponent } from './use-table/use-table.component';
import { UseTabsComponent } from './use-tabs/use-tabs.component';
import { UseTimepickerComponent } from './use-timepicker/use-timepicker.component';
import { UseTooltipComponent } from './use-tooltip/use-tooltip.component';
import { UseTypographyComponent } from './use-typography/use-typography.component';

const components = [
  PlaygroundComponent,
  UseModalComponent,
  UseColorsComponent,
  UseButtonsComponent,
  UseIconsComponent,
  UseMenuComponent,
  UseSpinnersComponent,
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
  UseCheckboxComponent,
  UseRadioComponent,
  UseControlsComponent,
  UsePaginationComponent,
  AutocompleteComponent,
  CustomMatChipListComponent,
  UseCustomMatChipListComponent,
  UseFunnelComponent,
];

@NgModule({
  imports: [
    SharedModule,
    SimpleMenuModule,
    AppFormsModule,
    RouterModule.forChild(playgrounRoutes),
    UIModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
  ],
  declarations: [components],
  providers: [
    UsePaginationUsersResolve,
    UsePaginationUserApiService,
    UsePaginationUserService,
  ],
  exports: [components],
})
export class PlaygroundModule {}
