import { IClient } from './../../services/client/client.model';
import { Observable } from 'rxjs/Rx';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'client$'
})
export class ClientPipe implements PipeTransform {

    transform(clients$: Observable<IClient[]>, query: string) {
        if(!query) return clients$;

        return clients$.map((clients: IClient[]) => clients.filter( (client: IClient) => this.compare(client , query) ));
    }

    compare(client: IClient , query: string) {
        return client.last.toLowerCase().startsWith(query) || client.first.toLowerCase().startsWith(query);
    }
}
