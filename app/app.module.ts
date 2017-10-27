import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { EditAnimalComponent} from './edit-animal.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnimalListComponent, EditAnimalComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
