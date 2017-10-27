import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: 'app/html/edit-animal.component.html',
  styles: [``]
})
export class EditAnimalComponent {
  @Input() animalSelected: ZooAnimal;
}
