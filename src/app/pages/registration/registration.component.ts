import { IClient } from './../../services/client/client.model';
import { ClientsService } from './../../services/client/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tim-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  private _avatarUrl = '';

  constructor(private clientService: ClientsService) { }

  ngOnInit() {
  }

  addAvatar($event: string) {
    console.log('Add avatar URL', $event);
    this._avatarUrl = $event;
  }

  submitForm($event: IClient) {
    $event.avatar = this._avatarUrl;
    console.log('RegistrationComponent.submitForm', $event);
    this.clientService.add($event).subscribe( (client: IClient) => console.log('RegistrationComponent.added client' , client));
  }

}
