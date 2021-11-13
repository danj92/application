import { Routes } from '@angular/router';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { UseCustomMatChipListComponent } from './use-custom-mat-chip-list/use-custom-mat-chip-list.component';
import { UseButtonsComponent } from './use-buttons/use-buttons.component';
import { UseCheckboxComponent } from './use-checkbox/use-checkbox.component';
import { UseCollapsableTextComponent } from './use-collapsable-text/use-collapsable-text.component';
import { UseColorsComponent } from './use-colors/use-colors.component';
import { UseControlsComponent } from './use-controls/use-controls.component';
import { UseCustomInputComponent } from './use-custom-input/use-custom-input.component';
import { UseCustomSelectComponent } from './use-custom-select/use-custom-select.component';
import { UseIconsComponent } from './use-icons/use-icons.component';
import { UseMenuComponent } from './use-menu/use-menu.component';
import { UseModalComponent } from './use-modal/use-modal.component';
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

export const playgroundChildrenRoutes: Routes = [
  {
    path: 'colors',
    component: UseColorsComponent,
  },
  {
    path: 'modal',
    component: UseModalComponent,
  },
  {
    path: 'icons',
    component: UseIconsComponent,
  },
  {
    path: 'menu',
    component: UseMenuComponent,
  },
  {
    path: 'spinners',
    component: UseSpinnersComponent,
  },
  {
    path: 'typography',
    component: UseTypographyComponent,
  },
  {
    path: 'tabs',
    component: UseTabsComponent,
  },
  {
    path: 'buttons',
    component: UseButtonsComponent,
  },
  {
    path: 'table',
    component: UseTableComponent,
  },
  {
    path: 'stepper',
    component: UseStepperComponent,
  },
  {
    path: 'schedule',
    component: UseScheduleComponent,
  },
  {
    path: 'custom-select',
    component: UseCustomSelectComponent,
  },
  {
    path: 'custom-input',
    component: UseCustomInputComponent,
  },
  {
    path: 'custom-checkbox',
    component: UseCheckboxComponent,
  },

  {
    path: 'collapsable-text',
    component: UseCollapsableTextComponent,
  },
  {
    path: 'radio',
    component: UseRadioComponent,
  },
  {
    path: 'tooltip',
    component: UseTooltipComponent,
  },
  {
    path: 'timepicker',
    component: UseTimepickerComponent,
  },
  {
    path: 'use-controls',
    component: UseControlsComponent,
  },
  {
    path: 'autocomplete',
    component: AutocompleteComponent,
  },
  {
    path: 'chip-list',
    component: UseCustomMatChipListComponent,
  },
  {
    path: 'use-pagination',
    component: UsePaginationComponent,
    resolve: {
      users: UsePaginationUsersResolve,
    },
  },

  {
    path: '',
    redirectTo: 'colors',
    pathMatch: 'full',
  },
];
