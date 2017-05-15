import { ClientSession } from './../../services/client/client.session';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class HasSession implements CanActivate {
    constructor(private clientSession: ClientSession){
        console.log('HasSession.canActivate init');
    }
            
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        console.log('HasSession.canActivate' , this.clientSession.hasClient());
        return Observable.of( this.clientSession.hasClient() );
    }
}