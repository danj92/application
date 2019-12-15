import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateRequestComponent } from './update-request-view/update-request.component';
import { UpdateRequestResolverService } from './update-request.resolver.service';
import { UsersResolverService } from './users.serolver.service';

const routes: Routes = [
  {
    path: '',
    component: UpdateRequestComponent,
    resolve: {
      request: UpdateRequestResolverService,
      user: UsersResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRequestRoutingModule { }
