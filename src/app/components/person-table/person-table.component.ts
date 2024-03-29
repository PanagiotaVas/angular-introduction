import { Component, Input, input } from '@angular/core';
import { Person } from 'src/app/shared/interface/person';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {

  @Input() person: Person | undefined;

}
