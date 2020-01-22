import { Routes } from '@angular/router';

import { UseColorsComponent } from './use-colors/use-colors.component';
import { UseSelectComponent } from './use-select/use-select.component';
import { UseModalComponent } from './use-modal/use-modal.component';
import { UseIconsComponent } from './use-icons/use-icons.component';
import { UseFormsComponent } from './use-forms/use-forms.component';
import { UseMenuComponent } from './use-menu/use-menu.component';
import { UseSpinnersComponent } from './use-spinners/use-spinners.component';
import { UseTypographyComponent } from './use-typography/use-typography.component';
import { UseTabsComponent } from './use-tabs/use-tabs.component';
import { UseTableComponent } from './use-table/use-table.component';

export const playgroundChildrenRoutes: Routes = [
  {
    path: 'colors',
    component: UseColorsComponent,
  },
  {
    path: 'select',
    component: UseSelectComponent,
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
    path: 'table',
    component: UseTableComponent,
  },
  {
    path: '',
    redirectTo: 'colors',
    pathMatch: 'full',
  },
];
