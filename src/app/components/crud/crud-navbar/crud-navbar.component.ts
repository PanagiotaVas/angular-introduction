import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-crud-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './crud-navbar.component.html',
  styleUrl: './crud-navbar.component.css'
})
export class CrudNavbarComponent {

}
