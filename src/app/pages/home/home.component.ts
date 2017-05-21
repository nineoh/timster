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

  constructor(private clientService: ClientService) { }

  ngOnInit() {
      this.clients = this.clientService.list();
  }

  filter(query: string): Observable<IClient[]> {
    return this.clients.map( (clients: IClient[]) => {
        return clients.filter( (value: IClient) => {
            console.log('query', query);
            return value.last === query;
        });
    });
  }
}
