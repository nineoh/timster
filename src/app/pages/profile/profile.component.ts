import { ClientService } from './../../services/client/client.service';
import { ClientSession } from './../../services/client/client.session';
import { IClient } from './../../services/client/client.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tim-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  client: IClient;

  constructor(private _route: ActivatedRoute,
              private _clientSession: ClientSession,
              private _clientService: ClientService) { }

  ngOnInit() {
    // fetch the data from the route
    this._route.data
      .subscribe( (data: {client: IClient}) => {
        this.client = data.client;
        if (!this.client.skills) {
          this.client.skills = [];
        }
      });
  }

  addAvatar($event: string) {
    console.log('Add avatar URL', $event);
    this.client.avatar = $event;
  }

  submitForm($event: IClient) {
    $event.avatar = this.client.avatar;
    $event.skills = this.client.skills;
    console.log('RegistrationComponent.submitForm', $event);
    this._clientService.update($event).subscribe( (client: IClient) => {
      this._clientSession.setClient(client);
      this.client = client;
    });
  }
}
