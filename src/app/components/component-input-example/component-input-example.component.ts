import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interface/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = 
  {
    givenName: 'P',
    surName: 'V',
    age: 1,
    email: 'aa@.a',
    address: 'Athens, Greece'
  }

  person1: Person = 
  {
    givenName: 'Alex',
    surName: 'Scarrow',
    age: 44,
    email: 'aa@.a',
    address: 'Brooklyn, USA'
  }

}
