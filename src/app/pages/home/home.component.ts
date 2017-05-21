import { ClientSession } from './../../services/client/client.session';
import { ClientService , IClient} from './../../services/client';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tim-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clients: Observable<IClient[]>;
  model: string;

  constructor(private clientService: ClientService, private clientSession: ClientSession) { }

  ngOnInit() {
      // usage of publishReplay which causes a caching of the data
      this.clients = this.clientService
        .list()
        .map((clients: IClient[]) => clients.filter( ({id}) => id !==  this.clientSession.getClient().id ))
        .publishReplay()
        .refCount();
  }
}
