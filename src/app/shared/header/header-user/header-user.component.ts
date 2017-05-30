import { IClient } from './../../../services/client/client.model';
import { ClientSession } from './../../../services/client/client.session';
import { Component, OnChanges, DoCheck} from '@angular/core';
@Component({
    selector: 'tim-header-user',
    templateUrl: './header-user.component.html',
    styles: [`.avatar{ 
                width: 80px 
            }`]
})
export class HeaderUserComponent implements DoCheck{
    private client: IClient;

    constructor(private clientSession: ClientSession){
    }

    ngDoCheck() {
        console.log('HeaderUserComponent.ngDoCheck', this.clientSession);
        this.client = this.clientSession.getClient();
    }
}
