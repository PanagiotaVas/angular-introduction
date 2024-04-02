import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interface/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-data-table',
  standalone: true,
  imports: [],
  templateUrl: './simple-data-table.component.html',
  styleUrl: './simple-data-table.component.css'
})
export class SimpleDataTableComponent {
  @Input() data: EPerson[]

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

  sortData(sortKey: string) {
    if(this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc'
      this.data = sortBy(this.data, sortKey).reverse()
    } else {
      this.sortOrder[sortKey] = 'asc'
      this.data = sortBy(this.data, sortKey)
    }

    for(let key in this.sortOrder) {
      if(key != sortKey) {
        this.sortOrder[key] = 'none'
        //ΑΝ ΔΕΝ ΕΧΩ ΠΑΤΗΣΕΙ ΑΥΤΟ ΤΟ KEY ΤΟ ΚΑΝΩ ΝΟΝΕ
      }
    }
  }

  sortSign(sortKey: string) {
    if(this.sortOrder[sortKey] === 'asc') {
      return '↑'
    } else if (this.sortOrder[sortKey] === 'desc' ) {
      return '↓'
    } else {
      return ''
    }
  }
}
