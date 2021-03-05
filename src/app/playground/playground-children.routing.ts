import { Routes } from '@angular/router';

import { UseColorsComponent } from './use-colors/use-colors.component';
import { UseModalComponent } from './use-modal/use-modal.component';
import { UseIconsComponent } from './use-icons/use-icons.component';
import { UseFormsComponent } from './use-forms/use-forms.component';
import { UseMenuComponent } from './use-menu/use-menu.component';
import { UseSpinnersComponent } from './use-spinners/use-spinners.component';
import { UseTypographyComponent } from './use-typography/use-typography.component';
import { UseTabsComponent } from './use-tabs/use-tabs.component';
import { UseTableComponent } from './use-table/use-table.component';
import { UseStepperComponent } from './use-stepper/use-stepper.component';
import { UseScheduleComponent } from './use-schedule/use-schedule.component';
import { UseButtonsComponent } from './use-buttons/use-buttons.component';
import { UseCustomSelectComponent } from './use-custom-select/use-custom-select.component';
import { UseCollapsableTextComponent } from './use-collapsable-text/use-collapsable-text.component';
import { UseTooltipComponent } from './use-tooltip/use-tooltip.component';
import { UseTimepickerComponent } from './use-timepicker/use-timepicker.component';

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
    path: 'forms',
    component: UseFormsComponent,
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
    path: 'collapsable-text',
    component: UseCollapsableTextComponent,
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
    path: '',
    redirectTo: 'colors',
    pathMatch: 'full',
  },
];
