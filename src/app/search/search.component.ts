import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls:  ['./search.component.css']
})
export class SearchComponent {
  values = '';

  onKey(value: string) { // without type info
    // this.values += event.target.value + ' | ';
    // this.values += (<HTMLInputElement>event.target).value + ' | ';
    // console.log(value);
  }

  update(value: string) {
    console.log(value);
  }
}
