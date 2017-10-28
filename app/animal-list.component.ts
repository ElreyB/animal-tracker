import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: 'app/html/animal-list.component.html',
  styles: [`
    h3 {
      text-align: center;
    }
    button.edit {
      float: right;
    }
    p, select {
      background-color: #453d3c;
    }
    p {
      padding: 2px 16px;
      border-radius: 4px;
      border: 2px solid white;
    }
    p.number {
      width: 44px;
    }
    select {
      margin-bottom: 8px;
      margin-top: -11px;
    }
    li {
      padding: 12px;
      border: 3px solid;
      border-radius: 25px;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    label, h3 {
      color: black;
    }
    small {
      color: white;
    }
    .bg-success {
      background-color: rgba(74, 151, 165, 0.89);
    }
    .bg-primary {
      background-color: rgba(51, 122, 183, 0.84);
    }
    `]
})

export class AnimalListComponent {
  @Input() childAnimalList: ZooAnimal[];
  @Output() animalClickedSender = new EventEmitter();
  filterByMaturity: string = "allAnimals";
  addAnimalWell: boolean = false;

  editButtonClicked(animalToEdit: ZooAnimal) {
    this.animalClickedSender.emit(animalToEdit);
  }

  onChange(optionFromMenu){
    this.filterByMaturity = optionFromMenu;
  }

  clickedAddButton(){
    this.addAnimalWell = true;
  }

  ageColor(currentAnimal){
    if (currentAnimal.age <= 2){
      return "bg-primary";
    } else {
      return "bg-success";
    }
  }
}
