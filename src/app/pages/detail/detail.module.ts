import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DetailRoutingModule
  ],
  declarations: [
    DetailComponent
  ],
  exports: [
      DetailRoutingModule
  ]
})
export class DetailModule { }
