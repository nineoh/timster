import { Injectable } from '@angular/core';
import { IClient } from './client.model';

@Injectable()
export class ClientSession{
    private client: IClient;

    setClient(client) {
        this.client = client;
    }

    getClient(client): IClient {
        return this.client;
    }

    hasClient() {
        return typeof this.client !== 'undefined';
    }
}
