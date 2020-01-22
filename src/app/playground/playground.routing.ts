import { Routes } from '@angular/router';
import { PlaygroundComponent } from './playground.component';
import { playgroundChildrenRoutes } from './playground-children.routing';

export const playgrounRoutes: Routes = [
  {
    path: '',
    component: PlaygroundComponent,
    children: playgroundChildrenRoutes,
  },
];
