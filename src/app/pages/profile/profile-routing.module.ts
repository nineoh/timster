import { HasSession } from './hassession.guard';
import { ClientsService } from './../../services/client/clients.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileResolver } from './profile.resolver';


const routes: Routes = [
{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [HasSession],
  resolve: {client: ProfileResolver}
},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
  exports: [RouterModule],
  providers: [ClientsService, ProfileResolver, HasSession ]
})
export class ProfileRoutingModule { }
