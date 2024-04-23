import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-crud-delete-example',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './crud-delete-example.component.html',
  styleUrl: './crud-delete-example.component.css'
})
export class CrudDeleteExampleComponent {

}
