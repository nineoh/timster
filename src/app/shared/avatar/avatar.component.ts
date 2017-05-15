import { AvatarUploadService } from './../../services/avatar-upload/avatar-upload.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
  selector: 'tim-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;
  @ViewChild('avatarFile') avatarFile;

  private _isEditMode = false;
  avatarForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _avatarUploadService: AvatarUploadService) {
    this.avatarForm = _formBuilder.group({
      avatarFile: ['', Validators.required]
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
    const fi = this.avatarFile.nativeElement;
    if (fi.files && fi.files[0]) {
      const fileToUpload = fi.files[0];
      this._avatarUploadService
          .upload(fileToUpload)
          .subscribe(res => {
            console.log(res);
          });

      this.childModal.hide();
    }
  }

}
