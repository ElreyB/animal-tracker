import { Component } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styles:[`
    `]
})

export class AppComponent {
  masterAnimalList: ZooAnimal[] = [
    new ZooAnimal("Arctic Fox", "Moon", 2, "Carnivore", "Northen Trail", 5, "Female", "Cool shade", "Loud noises"),
    new ZooAnimal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
  ]
}
