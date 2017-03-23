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
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form Submitted', JSON.stringify(this.profileForm.value));
    this.profileForm.reset();
  }

}
