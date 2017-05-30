import { Router, ActivatedRoute } from '@angular/router';
import { IClient } from './../../services/client/client.model';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'tim-detail-page',
    templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
    private client: IClient;

    constructor(private route: ActivatedRoute, private router: Router
    ) { }
    
    // Resolve the client from route data
    ngOnInit() {
        this.route.data
        .map( data => data.client )
        .subscribe(
            (client: IClient) => this.client = client,
            //  navigate the user back to the home screen
            (error: any) => this.router.navigate(['home'])
        );
    }

}
