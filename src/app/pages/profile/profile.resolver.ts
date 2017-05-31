import { Injectable } from '@angular/core';
import { ClientSession } from './../../services/client/client.session';
import { ServicesModule } from './../../services/services.module';
import { IClient} from './../../services/client';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProfileResolver implements Resolve<IClient> {

constructor(private _clientSession: ClientSession) {}

resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IClient> {

    return Observable.of( this._clientSession.getClient() );
  }
}
