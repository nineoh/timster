import { ClientSession } from './../../services/client/client.session';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class HasSession implements CanActivate {
    constructor(private clientSession: ClientSession, private router: Router){
        console.log('HasSession.canActivate init');
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean>|boolean {
        console.log('HasSession.canActivate' , this.clientSession.hasClient());
        if (this.clientSession.hasClient()) {
            return true;
        }else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
