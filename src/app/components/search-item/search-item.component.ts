import { Component, OnInit } from '@angular/core';
import {faSearch, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { SearchFormService } from '../../services/search-form.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index'
import * as filmListActions from '../../store/actions/film-list.actions';
import * as tvShowListActions from '../../store/actions/tv-shows-list.actions';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  private faSearch:any = faSearch;

  constructor(private _searchFormService:SearchFormService,
              private store:Store<fromRoot.State>) { }

  private getValue(inputValue:string) {
    this._searchFormService.title = inputValue;
  }

  private searchItems() {
    this._searchFormService.submited = true;
    if (window.location.pathname === "/movie") 
    { 
      this.store.dispatch(new filmListActions.SearchFilms(this._searchFormService));
    } 
    if (window.location.pathname === "/tv%23shows") {
      this.store.dispatch(new tvShowListActions.SearchTvShow(this._searchFormService));
    }
  }

  private toggle () {
    this._searchFormService.toggle();
  }

  ngOnInit() {
  }

}
