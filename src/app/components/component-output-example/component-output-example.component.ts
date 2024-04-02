import { Component } from '@angular/core';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { EPerson, ManyPerson } from 'src/app/shared/interface/person';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDataTableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson

  onPersonClicked(person: EPerson) {
    alert(this.personTemplate(person))
  }

  personTemplate(person: EPerson) {
    return `
      Person Details
        First name: ${person.givenName},
        Last name: ${person.surName},
        Age: ${person.age},
        Email: ${person.email},
        Education: ${person.education}
    `
  }
}
