import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: 'app/html/animal-list.component.html',
  styles: [`
    h3 {
      text-align: center;
    }
    button {
      float: right;
    }
    p {
      padding: 2px 16px;
      background-color: white;
      border-radius: 4px;
      border: 2px solid grey;
    }
    select {
      margin-bottom: 8px;
      margin-top: -11px;
    }
    `]
})

export class AnimalListComponent {
  @Input() childAnimalList: ZooAnimal[];
  @Output() animalClickedSender = new EventEmitter();
  filterByMaturity: string = "allAnimals"

  editButtonClicked(animalToEdit: ZooAnimal) {
    this.animalClickedSender.emit(animalToEdit);
  }

  onChange(optionFromMenu){
    this.filterByMaturity = optionFromMenu;
  }

}
