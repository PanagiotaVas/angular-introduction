import { Component, Input, input } from '@angular/core';
import { EPerson, Person } from 'src/app/shared/interface/person';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {

  @Input() person: Person | EPerson | undefined;

  isPerson() {
    return this.person && 'address' in this.person
        // ^^ if it is not undefined and has address
  }

  isEPerson() {
    return this.person && 'education' in this.person
        // ^^ if it is not undefined and has education
  }
}
