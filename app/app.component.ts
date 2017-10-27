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
    
  ]
}
