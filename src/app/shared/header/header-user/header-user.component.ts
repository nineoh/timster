import { IClient } from './../../../services/client/client.model';
import { ClientSession } from './../../../services/client/client.session';
import { Component, OnChanges, DoCheck, Input, ChangeDetectionStrategy} from '@angular/core';
@Component({
    selector: 'tim-header-user',
    templateUrl: './header-user.component.html',
    styles: [`.avatar{ 
                width: 80px 
            }`],
            changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderUserComponent{
    @Input() client: IClient;
}
