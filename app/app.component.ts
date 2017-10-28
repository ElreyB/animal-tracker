import { Component } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app/html/app.component.html',
  styles:[`
    button {
      margin-top: -13px;
      margin-bottom: 9px;
    }
    animal-list {
      padding: 5px;
    }
    div.add {
      background-color: #363d06;
      border: 3px solid white;
      border-radius: 25px;
    }
    `]
})

export class AppComponent {
  selectedAnimal = null;
  addAnimalWell: boolean = false;

  masterAnimalList: ZooAnimal[] = [
    new ZooAnimal("Arctic Fox", "Moon", 2, "Carnivore", "Northen Trail", 5, "Female", "Cool shade", "Loud noises"),
    new ZooAnimal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
  ]

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: ZooAnimal){
    this.masterAnimalList.push(newAnimalFromChild);
    this.addAnimalWell = false;
  }

  clickedAddButton() {
    this.selectedAnimal = null;
    if(this.addAnimalWell) {
      this.addAnimalWell = false;
    } else {
      this.addAnimalWell = true;
    }
  }

}
