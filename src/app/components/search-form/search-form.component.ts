import { Component, OnInit } from '@angular/core';
import { SearchFormService } from '../../services/search-form.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index'
import * as filmListActions from '../../store/actions/film-list.actions';
import * as tvShowListActions from '../../store/actions/tv-shows-list.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private _searchFormService: SearchFormService,
              private store:Store<fromRoot.State>) { }

  private isValid:boolean = true;
              
  private clickOutside() {
    this._searchFormService.toggle();
  }

  private titleValue(title:string) {
    this._searchFormService.title = title;
  }

  private overviewValue(overview:string) {
    this._searchFormService.overview = overview;
  }

  private adultValue(val:boolean) {
   this._searchFormService.adult = val;
  }

  private getGenreIds(id:number) {
    this._searchFormService.getGenreId(id);
  }

  private popularity(popVal: number) {
    this._searchFormService.popularity = popVal;
  }

  private voteAverage(voteVal: number) {
    this._searchFormService.vote_average = voteVal;
  }

  private rememberImputs(remVal: boolean) {
    this._searchFormService.remember_inputs = remVal;
  }
  
  private submit() {
    this._searchFormService.submited = true;
    if (window.location.pathname === "/movie") 
    { 
      this.store.dispatch(new filmListActions.SearchFilms(this._searchFormService));
    } 
    if (window.location.pathname === "/tv%23shows") {
      this.store.dispatch(new tvShowListActions.SearchTvShow(this._searchFormService));
    }
    this._searchFormService.toggle();
  }

  ngOnInit() {
    this._searchFormService.setDefault();
  }

}
