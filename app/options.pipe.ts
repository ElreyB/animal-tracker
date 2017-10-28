import { Pipe, PipeTransform } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Pipe({
  name: "options",
  pure: false
})

export class OptionsPipe implements PipeTransform {
  transform(input: ZooAnimal[], desiredOption){
    let output: ZooAnimal[] = [];
    if(desiredOption === "youngAnimals") {
      for (let i = 0; i < input.length; i++){
        if(input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredOption === "matureAnimals") {
      for (let i = 0; i < input.length; i++){
        if(input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredOption === "carnivoreAnimals") {
      for (let i = 0; i < input.length; i++){
        if(input[i].diet === "Carnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredOption === "herbivoreAnimals") {
      for (let i = 0; i < input.length; i++){
        if(input[i].diet === "Herbivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredOption === "piscivoreAnimals") {
      for (let i = 0; i < input.length; i++){
        if(input[i].diet === "Piscivore") {
          output.push(input[i]);
        }
      }
      return output;
    }else {
      return input;
    }
  }
}
