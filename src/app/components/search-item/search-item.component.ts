import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  faSearch = faSearch;

  constructor() { }
  
  public showForm:boolean = false;

  toggle () {
    if(this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }

  ngOnInit() {
  }

}
