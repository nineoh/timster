import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() avatarUrl: string;
  @Output() submitAvatar: EventEmitter<string> = new EventEmitter();
  @ViewChild('childModal') public childModal: ModalDirective;

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

  public onSubmit(): void {
    this.avatarUrl = this.avatarForm.controls.avatarUrl.value;

    this.submitAvatar.emit(this.avatarUrl);
    this.childModal.hide();
  }

}
