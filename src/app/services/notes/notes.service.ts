import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const NOTES_ENDPOINT = 'https://timster-backend.herokuapp.com/api/Notes';

@Injectable()
export class NotesService {

  constructor(private http: Http) { }

  notes(): Observable<any>{
    return this.http.get(NOTES_ENDPOINT).map( (response: Response) => {
        console.log('Notes response', response);
    });
  }

}
