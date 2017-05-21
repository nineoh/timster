import { IClient, ICredentials, ISkill } from './client.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export const CLIENT_ENDPOINT = `${environment.endpoint}api/clients`;

@Injectable()
export class ClientService {

  constructor(private http: Http) { }

  login(credentials: ICredentials): Observable<IClient> {

      return this.http.post(`${CLIENT_ENDPOINT}/login` , credentials)
        .map( (resp: Response) => resp.json() )
        .switchMap( (arr: IClient[]) =>  {
            console.log('ClientService.login' , arr);
            return arr.length ? Observable.of(arr[0]) : Observable.throw( {} );
        })
        .catch( (error: any) => Observable.throw(error) );
  }

  list(): Observable<IClient[]> {
    return this.http.get(CLIENT_ENDPOINT).map( (response: Response) => {
        console.log('Client response list', response.json());
        return response.json();
    });
  }

  add(client: IClient): Observable<IClient> {
    console.log('adding client', client , 'endpoint', CLIENT_ENDPOINT);
    return this.http
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

  updateSkill(skill: ISkill): Observable<IClient>{
    console.log('ClientService.updateSkill');
    return Observable.of();
  }

  /**
   * Get the client with the credentials
   */
  get(client?: IClient): Observable<IClient> {
    return Observable.of({
        first: 'TEST GET',
        last: 'TEST'
    });
  }

}
