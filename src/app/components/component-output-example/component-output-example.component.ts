import {Component, Inject} from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { EPerson, ManyPerson } from 'src/app/shared/interface/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [DialogModule, SimpleDataTableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson

  constructor(public dialog: Dialog) {}

  onPersonClicked(person: EPerson) {
    // console.log(person)
    // alert(this.personTemplate(person))
    this.dialog.open(PersonDialogComponent, {
      data: person
    });
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

@Component({
  imports: [PersonTableComponent],
  standalone: true,
  template: `
    <app-person-table [person]="person"></app-person-table>
    <button class="btn btn-primary btn-sm" (click)="dialogRef.close()">Close</button>
  `,
  styles: [
    `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 16px;
        max-width: 500px;
      }
    `,
  ]
})

class PersonDialogComponent {
  constructor(
    public dialogRef:DialogRef,
    @Inject(DIALOG_DATA) public person: EPerson
  ) {}
}
