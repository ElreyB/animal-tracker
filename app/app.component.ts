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
      background-color: rgba(54, 61, 6, 0.84);;
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
    new ZooAnimal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises"),
    new ZooAnimal("African Jewel Beetle", "Mindy", 1, "Herbivore", "Tropical Rain Forest Build", 2, "Male", "Eating flowers", "Big boots"),
    new ZooAnimal("Red Panda", "Cinnamon", 2, "Herbivore", "Tropical Rain Forest Build", 4, "Female", "Tire swing", "sour apples and peanuts"),
    new ZooAnimal("Black-crowned Night Heron", "Elcar", 6, "Piscivore", "Northern Trail", 5, "Male", "Gliding on the wind", "Airplanes")
  ]

  editAnimal(clickedAnimal){
    if(this.selectedAnimal) {
      this.selectedAnimal = null;
    } else {
      this.selectedAnimal = clickedAnimal;
    }

  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: ZooAnimal){
    this.masterAnimalList.push(newAnimalFromChild);
    this.addAnimalWell = false;
  }

  deleteAnimal(animalIndex: number){
    this.masterAnimalList.splice(animalIndex, 1);
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
