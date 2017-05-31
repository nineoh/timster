import { ClientSession } from './../../services/client/client.session';
import { IClient } from './../../services/client/client.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'tim-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  client: IClient;

  constructor(private _clientSession: ClientSession) { }

  ngOnInit() {
    this._clientSession.client$.subscribe( (client: IClient) => this.client = client );
  }

  close(event: Event): void {
    this.isCollapsed = true;
  }

}
