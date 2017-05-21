import { IClient } from './../../services/client/client.model';
import { ClientsService } from './../../services/client/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tim-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  avatarUrl = 'https://placehold.it/200x200';

  constructor(private clientService: ClientsService) { }

  ngOnInit() {
  }

  addAvatar($event: string) {
    console.log('Add avatar URL', $event);
    this.avatarUrl = $event;
  }

  submitForm($event: IClient) {
    $event.avatar = this.avatarUrl;
    console.log('RegistrationComponent.submitForm', $event);
    this.clientService.add($event).subscribe( (client: IClient) => console.log('RegistrationComponent.added client' , client));
  }

}
