import { ProfileModule } from './profile/profile.module';
import { ProfileRoutingModule } from './profile/profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  imports: [
    AdminModule,
    CommonModule,
    HomeModule,
    LoginModule,
    RegistrationModule,
    ProfileRoutingModule,
    ProfileModule
  ]
})
export class PagesModule { }
