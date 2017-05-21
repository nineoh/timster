import { IClient } from './../../services/client/client.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tim-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input() client: IClient;
  @Output() submitRegistration: EventEmitter<IClient> = new EventEmitter();
  profileForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
    if (this.client) {
      this.prefillForm();
    }
  }

  onSubmit() {
    console.log('Form Submitted', JSON.stringify(this.profileForm.value));
    const formData = Object.assign( this.profileForm.value);
    formData.password = formData.passwords.password;

    delete formData.passwords;

    this.submitRegistration.emit(formData);
  }

  initForm() {
    this.profileForm = this._formBuilder.group({
      id: [''],
      first: ['', Validators.required],
      last: ['', Validators.required],
      username: ['', Validators.required],
      passwords: this._formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        retypePassword: ['', [Validators.required, Validators.minLength(8)]],
      }, {validator: this.matchingPasswords('password', 'retypePassword')})
    });
  }

  prefillForm() {
    this.profileForm.get('id').setValue(this.client.id);
    this.profileForm.get('first').setValue(this.client.first);
    this.profileForm.get('last').setValue(this.client.last);
    this.profileForm.get('username').setValue(this.client.username);
    this.profileForm.get('passwords').get('password').setValue(this.client.password);
    this.profileForm.get('passwords').get('retypePassword').setValue(this.client.password);
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {
        [key: string]: any
    } => {
        const password = group.controls[passwordKey];
        const confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    }
}

  // validationMessages = {
  //   'firstName': {
  //     'required':      'First name is required.'
  //   },
  //   'lastName': {
  //     'required':      'Last name is required.'
  //   },
  //   'username': {
  //     'required':      'Username is required.'
  //   },
  //   'password': {
  //     'required':      'Password is required.'
  //   },
  //   'retypePassword': {
  //     'required':      'Passwords must match.'
  //   },
  //   'power': {
  //     'required': 'Power is required.'
  //   }
  // };

}
