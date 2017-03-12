import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../services/notes/notes.service'

@Component({
  selector: 'tim-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private notes: NotesService) { }

  ngOnInit() {
    console.log('HomeComponent init')
      this.notes.notes().subscribe( (data: any) => {
          console.log('HomeComponent response', data);
      });
  }

}
