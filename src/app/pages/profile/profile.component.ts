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

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    // fetch the data from the route 
    this.route.data
      .subscribe( (data: {client: IClient}) => this.client = data.client );
  }
}
