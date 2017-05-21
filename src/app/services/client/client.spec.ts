import { IClient } from './client.model';
import { listMockResponse, addMockResponse } from './client.mock.spec';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { ClientsService, CLIENT_ENDPOINT } from './client.service';
import { ClientSession } from './client.session';
import { inject, TestBed , tick, fakeAsync} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';



/**
 * Testing the user service
 */
describe('Service', () => describe('Clients', () => {
    const newClient: IClient = {
            first: 'TEST',
            last: 'Test',
            username: 'user',
            password: '1234'
    };

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [
                ClientsService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    const shouldHaveClientService = inject( [ClientsService] , (clientService: ClientsService) => {
        expect(clientService).toBeDefined();
    });

    const shouldAddClient = fakeAsync( inject([ClientsService, XHRBackend], (clientService: ClientsService, backend: MockBackend) => {
         backend.connections.subscribe((connection) => {
            expect(connection.request.url).toBe(CLIENT_ENDPOINT);
            connection.mockRespond(new Response( new ResponseOptions({body: listMockResponse }) ));
        });

        clientService.add(newClient).subscribe( client => expect(client).toBeDefined() );
        tick();
    }));

    const shouldAddError = fakeAsync( inject([ClientsService , XHRBackend] , (clientService: ClientsService , backend: MockBackend) => {
        backend.connections.subscribe((connection) => {
            connection.mockError(new Error('no user found'));
        });

        clientService.add(newClient).subscribe(
            client => {},
            error => expect(error).toBeDefined()
            );
        tick();

    } ));

    const shouldTestList = fakeAsync(inject([ClientsService, XHRBackend] , (clientService: ClientsService, backend: MockBackend) => {
        backend.connections.subscribe((connection) => {
            expect(connection.request.url).toBe(CLIENT_ENDPOINT);
            connection.mockRespond(new Response( new ResponseOptions({body: addMockResponse }) ));
        });

        clientService.list().subscribe( (data) => {
            expect(data).toBeDefined() ;
        }, error => console.error(error));

        tick();
    }));


    it('should have a ClientService', shouldHaveClientService );
    it('should have a ClientService list items', shouldTestList );
    it('should have a ClientService add new client', shouldAddClient );
    it('should throw error on bad client', shouldAddError );

}));
