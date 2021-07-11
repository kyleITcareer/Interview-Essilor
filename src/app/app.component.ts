import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  searchInvalid: boolean = false;
  search = new FormControl('');
  title = 'patient-search';
  priorSearches: any[] = [];

  onsubmit() {
    if(this.search.invalid) {
      this.searchInvalid = true;
    } else {
      this.searchInvalid = false;
      this.priorSearches.push(this.search.value)
      this.search.setValue('');
    }
  };

  removeSearchItem(i: number) {
    this.priorSearches.splice(i, 1);
  }
}
