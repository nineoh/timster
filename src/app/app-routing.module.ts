import { PagesModule } from './pages/pages.module';
import { HasSession } from './pages/profile/hassession.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [HasSession]
  },
  /*{
    path: 'registration',
    component: RegistrationComponent
  },*/
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    canActivate: [HasSession],
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    PagesModule
  ],
  providers: [HasSession],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
