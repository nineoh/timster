import { IClient } from './../../services/client/client.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'tim-user-item',
    template: `<div (click)="clickDetail.emit(client)"><h4>{{client?.first}}</h4><p>{{client?.last}}</p></div>`,
    styles: [`:host{
                cursor: pointer;
                transition: all 0.5s;
            }
            
            :host:hover{
                box-shadow: 0px 0px 8px 2px rgba(102,175,233,.6);
                z-index: 1
            }`]
})
export class UserItemComponent {
    @Input() client: IClient;
    @Output() clickDetail: EventEmitter<IClient> = new EventEmitter();
}
