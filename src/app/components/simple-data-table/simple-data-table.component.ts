import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interface/person';

@Component({
  selector: 'app-simple-data-table',
  standalone: true,
  imports: [],
  templateUrl: './simple-data-table.component.html',
  styleUrl: './simple-data-table.component.css'
})
export class SimpleDataTableComponent {
  @Input() data: EPerson[]
}
