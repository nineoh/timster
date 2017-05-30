import { DetailResolver } from './detail.resolver';
import { HasSession } from './../profile/hassession.guard';
import { DetailComponent } from './detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: 'detail/:id',
  component: DetailComponent,
  canActivate: [HasSession],
  resolve: {client: DetailResolver}
},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
  exports: [RouterModule],
  providers: [DetailResolver ]
})
export class DetailRoutingModule { }
