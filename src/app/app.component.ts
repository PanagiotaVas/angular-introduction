import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Panagiota";

  person = {
    givenName: 'P',
    surName: 'V',
    age: 1,
    email: 'aa@.a'
  }
}
