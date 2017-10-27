import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: 'app/animal-list.component.html',
  styles: [``]
})

export class AnimalListComponent {
  @Input() childAnimalList: ZooAnimal[];
  @Output() animalClickedSender = new EventEmitter();

  editButtonClicked(animalToEdit: ZooAnimal) {
    this.animalClickedSender.emit(animalToEdit);
  }
}
