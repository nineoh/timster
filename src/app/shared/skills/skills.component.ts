import { ModalDirective } from 'ng2-bootstrap/modal';
import { ISkill } from './../../services/client/client.model';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'tim-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skills: ISkill[];
  @ViewChild('addSkillModal') addSkillModal: ModalDirective;
  @ViewChild('focusInput') focusInput: any;

  model: ISkill = {name: undefined, level: 1};

  constructor() { }

  ngOnInit() {
  }

  addSkill() {
    this.skills.push({name: this.model.name, level: this.model.level});
    this.addSkillModal.hide();
    this.resetForm();
  }

  removeSkill(skill) {
    const index = this.skills.indexOf(skill);
    if (index > -1) {
      this.skills.splice(index, 1);
    }
  }

  onCancel() {
    this.addSkillModal.hide();
    this.resetForm();
  }

  openModal() {
    this.addSkillModal.show();

    setTimeout(() => { // wait until modal is loaded
      this.focusInput.nativeElement.focus();
    }, 500);
  }

  private resetForm() {
    this.model.name = '';
    this.model.level = 1;
  }

}
