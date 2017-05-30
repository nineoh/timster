import { NgModule } from '@angular/core';
import { LogoutUserResolver } from './logout.user.resolver';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';



  const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
   {
    path: 'logout',
    resolve: {
      user: LogoutUserResolver
    },
    component: LoginComponent
  },
];

@NgModule({
   imports: [
    RouterModule.forChild(routes)
    ],
    providers: [
        LogoutUserResolver
    ],
  exports: [RouterModule],
  
})
export class LoginRoutingModule {}