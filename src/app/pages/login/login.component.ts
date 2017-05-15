import { ClientSession } from './../../services/client/client.session';
import { Router } from '@angular/router';
import { IClient, ICredentials } from './../../services/client/client.model';
import { ClientsService } from './../../services/client/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tim-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData: ICredentials = {username: '' , password: ''};

  constructor(private clientServive: ClientsService ,
  private clientSession: ClientSession,
   private router: Router) { }

  ngOnInit() {
    // load the existin loaded user from the indexdb
  }

  login() {
      this.clientServive.login(this.formData)
      .subscribe(
        (client: IClient) => {
          console.log('LoginComponent.login' , client);
          this.clientSession.setClient(client);
          this.router.navigate(['profile']);
        },
        (error: any) => console.error('LoginComponent.error', error) );
  }
}
