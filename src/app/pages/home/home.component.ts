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
    console.log('HomeComponent init')
      this.notesService.notes().subscribe( (data: any) => {
          console.log('HomeComponent response', data);
          this.notes = data;
      });
  }

}
