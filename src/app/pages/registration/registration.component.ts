import { Router } from '@angular/router';
import { ClientSession } from './../../services/client/client.session';
import { IClient, ISkill } from './../../services/client/client.model';
import { ClientService } from './../../services/client/client.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tim-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  avatarUrl = 'https://placehold.it/200x200';
  skills: ISkill[] = [];

  constructor(private _clientService: ClientService,
              private _clientSession: ClientSession,
              private _router: Router) { }

  addAvatar(avatarUrl: string) {
    console.log('Add avatar URL', avatarUrl);
    this.avatarUrl = avatarUrl;
  }

  submitForm(client: IClient) {
    client.avatar = this.avatarUrl;
    client.skills = this.skills;
    console.log('RegistrationComponent.submitForm', client);
    this._clientService.add(client).subscribe( (res: IClient) => {
      console.log('RegistrationComponent.added client' , res);

      // Update client session
      this._clientSession.setClient(res);

      // Redirect to profile page
      this._router.navigate(['profile']);
    });
  }

}
