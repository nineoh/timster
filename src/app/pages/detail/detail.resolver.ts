import { ClientService } from './../../services/client/client.service';
import { Injectable } from '@angular/core';
import { ClientSession } from './../../services/client/client.session';
import { ServicesModule } from './../../services/services.module';
import { IClient} from './../../services/client';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DetailResolver implements Resolve<IClient> {

constructor(private clientSession: ClientSession, private clientService: ClientService) {}

resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IClient> {

    const id = route.params['id'];

    return this.clientService.get(id);
  }
}
