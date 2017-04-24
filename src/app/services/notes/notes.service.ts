import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const NOTES_ENDPOINT = `${environment.endpoint}api/notes`;

@Injectable()
export class NotesService {

  constructor(private http: Http) { }

  list(): Observable<any>{
    return this.http.get(NOTES_ENDPOINT).map( (response: Response) => {
        console.log('Notes response', response.json());
        return response.json();
    });
  }

  add(note: any): Observable<any>{
    return this.http.post(NOTES_ENDPOINT, note).map( (response: Response) => {
        console.log('Notes response', response.json());
        return response.json();
    });
  }

}
