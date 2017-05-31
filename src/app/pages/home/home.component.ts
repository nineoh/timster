import { Router } from '@angular/router';
import { ClientSession } from './../../services/client/client.session';
import { ClientService, IClient } from './../../services/client';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tim-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  clients: Observable<IClient[]>;
  model: string;

  constructor(
    private _clientService: ClientService,
    private _clientSession: ClientSession,
    private _router: Router) { }

  ngOnInit() {
    // usage of publishReplay which causes a caching of the data
    this.clients = this._clientService
      .list()
      .map((clients: IClient[]) => clients.filter(({ id }) => id !== this._clientSession.getClient().id))
      .publishReplay()
      .refCount();
  }

  detail($event: IClient) {
    this._router.navigate(['/detail', $event.id]);
  }
}
