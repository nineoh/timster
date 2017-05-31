import { ClientSession } from './client/client.session';
import { ClientService } from './client/client.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
      ClientService,
      ClientSession
    ]
})
export class ServicesModule { }
