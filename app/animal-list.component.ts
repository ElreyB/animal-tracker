import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: 'app/html/animal-list.component.html',
  styles: [``]
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
