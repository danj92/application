import { Routes } from '@angular/router';

import { playgroundChildrenRoutes } from './playground-children.routing';
import { PlaygroundComponent } from './playground.component';

export const playgrounRoutes: Routes = [
  {
    path: '',
    component: PlaygroundComponent,
    children: playgroundChildrenRoutes,
  },
];
