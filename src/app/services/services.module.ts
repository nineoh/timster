import { ClientSession } from './client/client.session';
import { ClientService } from './client/client.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NotesService } from './notes/notes.service';

@NgModule({
  providers: [
      ClientService,
      NotesService,
      ClientSession,
      NotesService
    ]
})
export class ServicesModule { }
