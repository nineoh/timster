import { RegistrationModule } from './../registration/registration.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
