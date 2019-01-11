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

  public isValid:boolean = true;
              
  public clickOutside():void {
    this._searchFormService.toggle();
  }

  public titleValue(title:string):void {
    this._searchFormService.title = title;
  }

  public overviewValue(overview:string):void {
    this._searchFormService.overview = overview;
  }

  public adultValue(val:boolean):void {
   this._searchFormService.adult = val;
  }

  public getGenreIds(id:number):void {
    this._searchFormService.getGenreId(id);
  }

  public popularity(popVal: number):void {
    this._searchFormService.popularity = popVal;
  }

  public voteAverage(voteVal: number):void {
    this._searchFormService.vote_average = voteVal;
  }

  public rememberInputs(remVal: boolean):void {
    this._searchFormService.remember_inputs = remVal;
  }
  
  public submit():void {
    this._searchFormService.submitted = true;
    if (window.location.pathname === "/movie") 
    { 
      this.store.dispatch(new filmListActions.SearchFilms(this._searchFormService));
    } 
    if (window.location.pathname === "/tvShows") {
      this.store.dispatch(new tvShowListActions.SearchTvShow(this._searchFormService));
    }
    this._searchFormService.toggle();
  }

  ngOnInit() {
    this._searchFormService.setDefault();
  }

}
