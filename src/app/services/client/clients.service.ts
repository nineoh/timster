import { IClient } from './client.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const CLIENT_ENDPOINT = `${environment.endpoint}api/clients`;

@Injectable()
export class ClientsService {

  constructor(private http: Http) { }

  list(): Observable<IClient[]>{
    return this.http.get(CLIENT_ENDPOINT).map( (response: Response) => {
        console.log('Notes response', response.json());
        return response.json();
    });
  }

  add(client: IClient): Observable<IClient>{
    console.log('adding client', client);
    return this.http.post(CLIENT_ENDPOINT, client).map( (response: Response) => {
        console.log('Notes response', response.json());
        return response.json();
    });
  }

}
