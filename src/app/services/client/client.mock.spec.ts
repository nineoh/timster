import { IClient } from './client.model';
import { ClientService } from './client.service';
/**
 * Mock data for the ClientService
 */
export const listMockResponse: IClient[] = [{
    first: 'First User',
    last: 'Last User',
    username: 'testuser',
    password: '1234'
},
{
    first: 'Second User',
    last: 'Second last User',
    username: 'testuser',
    password: '1234'
}
];

export const addMockResponse: IClient = {
    first: 'First User',
    last: 'Last User',
    username: 'testuser',
    password: '1234'
};
