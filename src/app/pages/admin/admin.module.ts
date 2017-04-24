import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {routes} from './admin.route';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
      AdminComponent
  ]
})
export class AdminModule { }
