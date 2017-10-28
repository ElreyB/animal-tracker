import { Component } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app/html/app.component.html',
  styles:[`
    button {
      margin-top: -13px;
      margin-bottom: 9px;
      background-color: #453d3c;
    }
    animal-list {
      padding: 5px;
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
