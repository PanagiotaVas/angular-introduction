import { Component } from '@angular/core';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { ManyPerson } from 'src/app/shared/interface/person';

@Component({
  selector: 'app-simple-database-example',
  standalone: true,
  imports: [SimpleDataTableComponent],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})
export class SimpleDataTableExampleComponent {
  manyperson = ManyPerson
}

