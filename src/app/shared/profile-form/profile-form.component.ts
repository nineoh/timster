import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tim-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.profileForm = _formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      passwords: _formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        retypePassword: ['', [Validators.required, Validators.minLength(8)]],
      }, {validator: this.matchingPasswords('password', 'retypePassword')})
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form Submitted', JSON.stringify(this.profileForm.value));
    this.profileForm.reset();
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {
        [key: string]: any
    } => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];

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
