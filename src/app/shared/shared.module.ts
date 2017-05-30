import { HeaderUserComponent } from './header/header-user/header-user.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ClientPipe } from './pipes/client.pipe';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [
    CollapseModule,
    CommonModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    AvatarComponent,
    HeaderComponent,
    HeaderUserComponent,
    ProfileFormComponent,
    SkillsComponent,
    ClientPipe,
    UserItemComponent
  ],
  exports: [
    ClientPipe,
    AvatarComponent,
    HeaderComponent,
    ProfileFormComponent,
    FormsModule,
    ReactiveFormsModule,
    SkillsComponent,
    UserItemComponent
  ]
})
export class SharedModule { }
