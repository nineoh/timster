import { Subject, Subscription } from 'rxjs/Rx';
import { ClientSession } from './../../services/client/client.session';
import { IClient } from './../../services/client/client.model';
import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tim-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  client: IClient;
  clientSubscription: Subscription;

  constructor(private _clientSession: ClientSession) { }

  ngOnInit() {
    this.clientSubscription = this._clientSession.client$.subscribe((client: IClient) => this.client = client);
  }

  ngOnDestroy() {
    if (this.clientSubscription) {
      this.clientSubscription.unsubscribe();
    }
  }

  close(event: Event): void {
    this.isCollapsed = true;
  }

}
