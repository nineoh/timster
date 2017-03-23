import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tim-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  close(event: Event): void {
    this.isCollapsed = true;
  }

}
