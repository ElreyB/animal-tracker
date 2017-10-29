import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: 'app/html/edit-animal.component.html',
  styles: [`
    p {
      padding: 2px 16px;
      border-radius: 4px;
      border: 2px solid white;
      background-color: #453d3c;
      color: white;
    }
    p.number {
      width: 55px;
    }
    h3, h2 {
      text-align: center;
    }
    div.line{
      background-color: #333333;
      width: 515px;
      height: 3px;
      margin-top: 9px;
      margin-bottom: 9px;
    }
    button {
      margin-top: 17px;
      border-radius: 12px;
    }
    div.page-header {
      background-color: #463e3d;
      border: solid;
      border-radius: 10px;
      padding-left: 20px;
    }
    div.page-header, small {
      color: white;
    }
    .panel-body, .panel-heading {
      background-color: rgba(183, 32, 32, 0.76);
      border: solid white;
      border-radius: 28px;
    }
    .panel {
      border-radius: 27px;
      background-color: rgba(255, 255, 255, 0.56);
      position: fixed;
      bottom: 14px;
    }
    input {
      background-color: #463e3d;
      padding: 2px 16px;
    }

    `]
})
export class EditAnimalComponent {
  @Input() animalSelected: ZooAnimal;
  @Output() editAnimalSender = new EventEmitter();

  editDoneButtonClicked() {
    this.editAnimalSender.emit();
  }
  limitAge() {
    const { age } = this.animalSelected

    if (age > 999) {
      age = 999
    } else if (age < 0) {
      age = 0
    }
    this.animalSelected.age = age
  }

  limitCaretaker() {
    const { caretakers } = this.animalSelected

    if (caretakers > 10) {
      caretakers = 10
    } else if (caretakers < 0) {
      caretakers = 0
    }
    this.animalSelected.caretakers = caretakers
  }
}
