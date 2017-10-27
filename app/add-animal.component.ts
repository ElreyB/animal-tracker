import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'add-animal',
  templateUrl: 'app/html/add-animal.component.html',
  styles: [``]
})

export class AddAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  newAnimalForm(
    species: string,
     name: string,
     age: number,
     diet: string,
     location: string,
     caretakers: number,
     sex: string,
     likes: string,
     dislikes: string,
    ){
    let newAnimalToAdd: ZooAnimal = new ZooAnimal(
      species,
      name,
      age,
      diet,
      location,
      caretakers,
      sex,
      likes,
      dislikes);
      this.newAnimalSender.emit(newAnimalToAdd); 
  }
}
