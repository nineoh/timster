import { INITIALUSERS } from './initial.user';
import { AdminModule } from './admin.module';
import { IClient } from './../../services/client/client.model';
import { ClientService } from './../../services/client/client.service';
import { Component } from '@angular/core';

@Component({
    selector: 'tim-admin',
    templateUrl: './admin.html'
})
export class AdminComponent {

    constructor(private _clients: ClientService) {

    }

    addClient() {

        for (const client of INITIALUSERS) {
            this._clients.add(client).subscribe((resp: any) => {
                console.log('AdminComponent.add', resp);
            });
        }
    }

}
