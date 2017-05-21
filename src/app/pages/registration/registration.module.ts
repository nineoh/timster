import { SharedModule } from './../../shared/shared.module';
import { RegistrationComponent } from './registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
