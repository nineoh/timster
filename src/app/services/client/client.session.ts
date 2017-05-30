import { Injectable } from '@angular/core';
import { IClient } from './client.model';
import {BehaviorSubject, Subject} from 'rxjs/Rx';

@Injectable()
export class ClientSession {
    private client: IClient;
    private _client$: Subject<IClient> = new BehaviorSubject(undefined);

    get client$(){
        return this._client$.share();
    }

    setClient(client) {
        this.client = client;
        this._client$.next(client);
    }

    getClient(): IClient {
        return this.client;
    }

    hasClient() {
        return typeof this.client !== 'undefined';
    }

    reset() {
        this.client = undefined;
        this._client$.next(undefined);
    }
}
