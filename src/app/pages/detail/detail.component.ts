import { Router, ActivatedRoute } from '@angular/router';
import { IClient } from './../../services/client/client.model';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'tim-detail-page',
    templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
    client: IClient;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    // Resolve the client from route data
    ngOnInit() {
        this._route.data
            .map(data => data.client)
            .subscribe(
            (client: IClient) => this.client = client,
            //  navigate the user back to the home screen
            (error: any) => this._router.navigate(['home'])
            );
    }

}
