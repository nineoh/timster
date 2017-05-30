import { IClient } from './../../services/client/client.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { ClientSession } from './../../services/client/client.session';
import { Injectable } from '@angular/core';
@Injectable()
export class LogoutUserResolver implements Resolve<IClient>{
    constructor(private clientSession: ClientSession, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
            console.log('LogoutUserResolver reset user');
            this.clientSession.reset();

            this.router.navigate(['login']);
    }
}
