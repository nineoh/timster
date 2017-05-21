import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes/notes.service'

@Component({
  selector: 'tim-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  notes: any;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
      this.notesService.list().subscribe( (data: any) => {
          this.notes = data;
      });
  }

}
