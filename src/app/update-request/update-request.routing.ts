import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateRequestComponent } from './update-request.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRequestRoutingModule { }
