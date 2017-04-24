import { AdminModule } from './admin.module';
import { IClient } from './../../services/client/client.model';
import { ClientsService } from './../../services/client/clients.service';
import { Component } from '@angular/core';

@Component({
    selector: 'tim-admin',
    templateUrl: './admin.html'
})
export class AdminComponent{

    constructor(private _clients: ClientsService){

    }

    addClient(){
        const dummyClient: IClient = <IClient>{
            first: 'Hans',
            last: 'Jakob',
            username: 'hj',
            password: '1234',
            profile: 'http://graph.facebook.com/691850668/picture?width=200&height=200'
        };

        this._clients.add(dummyClient).subscribe((resp: any) => {
            console.log('AdminComponent.add', resp);
        });
    }

}
