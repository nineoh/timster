import { ClientSession } from './../../services/client/client.session';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class HasSession implements CanActivate {
    constructor(
        private _clientSession: ClientSession,
        private _router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean>|boolean {
        console.log('HasSession.canActivate' , this._clientSession.hasClient());
        if (this._clientSession.hasClient()) {
            return true;
        }else {
            this._router.navigate(['login']);
            return false;
        }
    }
}
