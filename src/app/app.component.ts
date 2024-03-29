import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interface/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Panagiota";

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
