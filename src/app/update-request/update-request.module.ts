import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateRequestComponent } from './update-request.component';
import { UpdateRequestRoutingModule } from './update-request.routing';

@NgModule({
  declarations: [UpdateRequestComponent],
  imports: [
    CommonModule,
    UpdateRequestRoutingModule
  ]
})
export class UpdateRequestModule { }
