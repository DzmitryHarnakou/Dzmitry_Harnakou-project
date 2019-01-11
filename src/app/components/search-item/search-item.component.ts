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

  public inputValue: string;
  public faSearch:IconDefinition = faSearch;
  public showForm: boolean;
  public displayForm: string = this._searchFormService.displayForm;

  constructor(public _searchFormService:SearchFormService,
              private store:Store<fromRoot.State>) { }

  public getValue():void {
    this._searchFormService.title = this.inputValue;
  }

  public searchItems():void {
    this._searchFormService.submitted = true;
    if (window.location.pathname === "/movie") 
    { 
      this.store.dispatch(new filmListActions.SearchFilms(this._searchFormService));
    } 
    if (window.location.pathname === "/tvShows") {
      this.store.dispatch(new tvShowListActions.SearchTvShow(this._searchFormService));
    }
  }

  public toggle ():void {
    this._searchFormService.toggle();
  }

  ngOnInit() {
  }

}
