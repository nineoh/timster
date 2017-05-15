import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { ClientsService } from './../../services/client/clients.service';
import { IClient } from './../../services/client/client.model';

@Component({
  selector: 'tim-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Output() submitAvatar: EventEmitter<string> = new EventEmitter();
  @ViewChild('childModal') public childModal: ModalDirective;

  private _isEditMode = false;
  private _avatarUrl = 'https://graph.facebook.com/691850668/picture?width=200&height=200';
  avatarForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.avatarForm = _formBuilder.group({
      avatarUrl: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }

  public onSubmit($event): void {
    this._avatarUrl = this.avatarForm.controls.avatarUrl.value;

    this.submitAvatar.emit(this._avatarUrl);
    this.childModal.hide();
  }

}
