import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { SearchFormService } from '../../services/search-form.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  faSearch = faSearch;

  constructor(private _searchFormService:SearchFormService) { }

  toggle () {
    this._searchFormService.toggle();
  }

  ngOnInit() {
  }

}
