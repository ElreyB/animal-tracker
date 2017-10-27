import { Pipe, PipeTransform } from '@angular/core';
import { ZooAnimal } from './zoo-animal.model';

@Pipe({
  name: "maturity",
  pure: false
})

export class MaturityPipe implements PipeTransform {
  transform(input: ZooAnimal[], desiredMaturity){
    let output: ZooAnimal[] = [];
    if(desiredMaturity === "youngAnimals") {
      for (let i = 0; i < input.length; i++){
        if(input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMaturity === "matureAnimals") {
      for (let i = 0; i < input.length; i++){
        if(input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    }else {
      return input;
    }
  }
}
