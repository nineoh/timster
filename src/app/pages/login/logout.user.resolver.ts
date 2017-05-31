import { IClient } from './../../services/client/client.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { ClientSession } from './../../services/client/client.session';
import { Injectable } from '@angular/core';
@Injectable()
export class LogoutUserResolver implements Resolve<IClient> {
    constructor(
        private _clientSession: ClientSession,
        private _router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
            console.log('LogoutUserResolver reset user');
            this._clientSession.reset();

            this._router.navigate(['login']);
    }
}
