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
      width: 44px;
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
    .panel-body {
      background-color: #b72020;
    }
    .panel-heading {
      background-color: #b72020;
    }
    .panel-heading, .panel-body {
      border: solid white;
      border-radius: 28px;
    }
    .panel {
      border-radius: 27px;
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
}
