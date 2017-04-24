import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tim-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  private _isEditMode = false;

  constructor() { }

  ngOnInit() {
  }

}
