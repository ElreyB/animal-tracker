import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'add-animal',
  templateUrl: 'app/html/add-animal.component.html',
  styles: [`
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
    input {
      background-color: #463e3d;
    }
    `]
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
