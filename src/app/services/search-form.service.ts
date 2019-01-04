import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducers/index'
import * as filmListActions from '../store/actions/film-list.actions';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  public title:string = '';
  public overview:string =  '';
  public genres_ids: number[] = [];
  public adult:boolean = false;
  public popularity:number = null;
  public vote_average:number = null;
  public remember_inputs:boolean = false;

  public showForm:boolean = false;
  public displayForm:string = "flex";

  public submited: boolean = false; 

  constructor(private store:Store<fromRoot.State>) { }

  public getGenreId(val:number) {
      for (var i = 0; i < this.genres_ids.length; i++) {
        if (this.genres_ids[i] === val) {
          this.genres_ids.splice(i, 1);
          return;
        }
      }
    this.genres_ids.push(val);
  }

  public setDefault () {
    this.adult = false;
    this.genres_ids = [];
    this.overview = "";
    this.popularity = null;
    this.title = "";
    this.vote_average = null;
    this.remember_inputs = false;
    this.submited = false;
  }

  public toggle () {
    if (window.location.pathname === "/movie" || window.location.pathname === "/tv%23shows"){
      if (this.remember_inputs === false){
        if(this.showForm) {
          this.showForm = false;
        } else {
          this.showForm = true;
        }
      } else {
        if (this.displayForm === "flex") {
          this.displayForm = "none";
        } else {
          this.displayForm = "flex";
        } 
      }
    }
  }

  public submit() {
    if (window.location.pathname === "/movie") 
    { 
      this.store.dispatch(new filmListActions.SearchForm());
    } 
    if (window.location.pathname === "/tv%23shows") {
      alert("search TV SHOWS");
    }

    this.submited = true;
  }

  public genres = [
    {text:"Action", genre_id: 28},
    {text:"Adventure", genre_id: 12},
    {text:"Thriller", genre_id: 53},
    {text:"Comedy", genre_id: 35},
    {text:"Fantasy", genre_id: 14},
    {text:"Drama", genre_id: 18},
    {text:"Horor", genre_id: 27},
    {text:"Criminal", genre_id: 80},
    {text:"War", genre_id: 10752},
    {text:"Documentary", genre_id: 99},
  ]
}
