import { ClientsService } from './../../services/client/clients.service';
import { ServicesModule } from './../../services/services.module';
import { IClient} from './../../services/client';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';

export class ProfileResolver implements Resolve<IClient> {

constructor() {}

resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IClient> {
    return Observable.of({first: 'TEST', last: 'LAST'});
  }
}