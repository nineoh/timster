import { AdminModule } from './pages/admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileModule} from './pages/profile/profile.module';
import { ServicesModule } from './services/services.module';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProfileFormComponent } from './shared/profile-form/profile-form.component';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { ModalModule } from 'ng2-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    RegistrationComponent,
    ProfileFormComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    ProfileModule,
    AdminModule,
    ServicesModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
