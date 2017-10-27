import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: 'app/html/edit-animal.component.html',
  styles: [`
    p {
      padding: 2px 16px;
      background-color: white;
      border-radius: 4px;
      border: 2px solid grey;
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
      margin-top: 9px;
      margin-bottom: -8px;
    }
    `]
})
export class EditAnimalComponent {
  @Input() animalSelected: ZooAnimal;
  @Output() editAnimalSender = new EventEmitter();

  editDoneButtonClicked() {
    this.editAnimalSender.emit();
  }
}
