import { ISkill } from './../../services/client/client.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tim-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skills: ISkill[] = [
    {name: 'Angular 1', level: 3},
    {name: 'Angular 2', level: 5},
    {name: 'jQuery', level: 4},
    {name: 'Sauffen', level: 5},
    {name: 'Angular 1', level: 3},
    {name: 'Angular 2', level: 5},
    {name: 'jQuery', level: 4},
    {name: 'Sauffen', level: 5},
    {name: 'Angular 1', level: 3},
    {name: 'Angular 2', level: 5},
    {name: 'jQuery', level: 4},
    {name: 'Sauffen', level: 5}
  ];

  constructor() { }

  ngOnInit() {
  }

}
