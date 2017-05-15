import { AvatarUploadService } from './avatar-upload/avatar-upload.service';
import { ClientsService } from './client/clients.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NotesService} from './notes/notes.service';

@NgModule({
  providers: [
      ClientsService,
      NotesService,
      AvatarUploadService
    ]
})
export class ServicesModule { }
