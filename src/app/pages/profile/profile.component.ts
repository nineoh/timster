import { ClientService } from './../../services/client/client.service';
import { ClientSession } from './../../services/client/client.session';
import { IClient } from './../../services/client/client.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tim-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  client: IClient;

  constructor(private route: ActivatedRoute,
              private clientSession: ClientSession,
              private clientService: ClientService) { }

  ngOnInit() {
    // fetch the data from the route
    this.route.data
      .subscribe( (data: {client: IClient}) => this.client = data.client);
  }

  addAvatar($event: string) {
    console.log('Add avatar URL', $event);
    this.client.avatar = $event;
  }

  submitForm($event: IClient) {
    $event.avatar = this.client.avatar;
    console.log('RegistrationComponent.submitForm', $event);
    this.clientService.update($event).subscribe( (client: IClient) => this.client = client);
  }
}
