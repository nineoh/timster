import { ClientSession } from './../../services/client/client.session';
import { Router } from '@angular/router';
import { IClient, ICredentials } from './../../services/client/client.model';
import { ClientService } from './../../services/client/client.service';
import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'tim-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('focusInput') focusInput: any;

  formData: ICredentials = { username: '', password: '' };

  constructor(private clientServive: ClientService,
    private clientSession: ClientSession,
    private router: Router) { }

  ngAfterViewInit(): void {
    this.focusInput.nativeElement.focus();
  }


  login() {
    this.clientServive.login(this.formData)
      .subscribe(
      (client: IClient) => {
        console.log('LoginComponent.login', client);
        this.clientSession.setClient(client);
        this.router.navigate(['home']);
      },
      (error: any) => console.error('LoginComponent.error', error));
  }
}
