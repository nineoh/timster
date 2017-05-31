import { IClient, ICredentials, ISkill } from './client.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export const CLIENT_ENDPOINT = `${environment.endpoint}api/clients`;

@Injectable()
export class ClientService {

  constructor(private _http: Http) { }

  login(credentials: ICredentials): Observable<IClient> {

      return this._http.post(`${CLIENT_ENDPOINT}/login` , credentials)
        .map( (resp: Response) => resp.json() )
        .switchMap( (arr: IClient[]) =>  {
            console.log('ClientService.login' , arr);
            return arr.length ? Observable.of(arr[0]) : Observable.throw( {} );
        })
        .catch( (error: any) => Observable.throw(error) );
  }

  list(): Observable<IClient[]> {
    return this._http.get(CLIENT_ENDPOINT).map( (response: Response) => {
        console.log('Client response list', response.json());
        return response.json();
    });
  }

  add(client: IClient): Observable<IClient> {
    console.log('adding client', client , 'endpoint', CLIENT_ENDPOINT);
    return this._http
      .post(CLIENT_ENDPOINT, client)
      .map( (response: Response) => {
        console.log('Client add response', response.json());
        return response.json();
       })
       .catch( (error: any) => {
        console.error('ClientService.add' , error);
         return Observable.throw(error);
       });
  }

  update(client: IClient): Observable<IClient> {
    console.log('ClientService.updateSkill');
    const url  = `${CLIENT_ENDPOINT}/${client['id']}`;
    return this._http.put(url , client ).map( (response: Response) => <IClient>response.json() );
  }

  /**
   * Get the client with the id
   */
  get(id?: string): Observable<IClient> {
    const url  = `${CLIENT_ENDPOINT}/${id}`;
    return this._http.get(url ).map( (response: Response) => <IClient>response.json() );
  }
}
