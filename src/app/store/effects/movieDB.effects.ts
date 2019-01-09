import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LocalStorageService } from '../../services/local-storage.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as movieDbActions from '../actions/movieDB.actions';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import * as fromRoot from '../reducers/index';
import { MovieListItem } from '../models/movie-list-item';



@Injectable()
export class MovieDbEffects {

  constructor(private actions$: Actions,
              private _localStorageService: LocalStorageService,
              private  store:Store<fromRoot.State>) {}

  async setMovieToLocal(action:movieDbActions.SetMovieListToLocalStorage) {
    for (var i = 0; i< this._localStorageService.getMovieListFromLocalStorage().length; i++) {
      if (this._localStorageService.getMovieListFromLocalStorage()[i].id == action.payload.id){
        return;
      }
    }
    return this._localStorageService.setMovieToLocalStorage(action.payload);
  }

  async getMovieFromLocal() {
    return this._localStorageService.getMovieListFromLocalStorage();
  }


  async setTvShowToLocal(action:any) {
    for (var y = 0; y < this._localStorageService.getTvShowListFromLocalStorage().length; y++) {
      if (Number(this._localStorageService.getTvShowListFromLocalStorage()[y].id) == Number(action.payload.id)){
        return;
      }
    }
    return this._localStorageService.setTvShowToLocalStorage(action.payload);
  }

  async getTvShowFromLocal() {
    return this._localStorageService.getTvShowListFromLocalStorage();
  }
 
  async removeMoviefromLocal(action:any) {
    this._localStorageService.removeMovieFromLocalStorage(action);
    return this._localStorageService.getMovieListFromLocalStorage();
  }

  async removeTvShowfromLocal(action:any) {
    this._localStorageService.removeTvShowFromLocalStorage(action);
    return this._localStorageService.getTvShowListFromLocalStorage();
  }

  async setNewItemToLocalStorage(action:any) {
    this._localStorageService.setMovieToLocalStorage(action.payload);
    this._localStorageService.addNewFilesToLocal(action);
    return this.getMovieFromLocal();
  }

  @Effect ()
  public setMovieToLocalStorage$ = this.actions$.pipe(
  ofType(movieDbActions.MovieDbActionTypes.SetMovieListToLocalStorage),
  switchMap(( action: movieDbActions.SetMovieListToLocalStorage ) => from(
  this.setMovieToLocal(action)).pipe(
  map((resultArray:any)=> new movieDbActions.SetMovieListToLocalStorageSucsess(
  resultArray), catchError(err => err)))));
  

  @Effect ()
  public getMovieFromLocalStorage$ = this.actions$.pipe(
  ofType(movieDbActions.MovieDbActionTypes.GetMovieListFromLocalStorage),
  switchMap(() => from(this.getMovieFromLocal()
     ).pipe(
  map((resultArray:any)=> new movieDbActions.GetMovieListFromLocalStorageSucsess(
  resultArray), catchError(err => err)))));
  

  @Effect ()
  public setTvShowToLocalStorage$ = this.actions$.pipe(
  ofType(movieDbActions.MovieDbActionTypes.SetTvShowListToLocalStorage),
  switchMap(( action: movieDbActions.SetTvShowListToLocalStorage ) => from(
  this.setTvShowToLocal(action)).pipe(
  map((resultArray:any)=> new movieDbActions.SetTvShowListToLocalStorageSucsess(
  resultArray), catchError(err => err)))));
  

  @Effect ()
  public getTvShowFromLocalStorage$ = this.actions$.pipe(
  ofType(movieDbActions.MovieDbActionTypes.GetTvShowListFromLocalStorage),
  switchMap(() => from(this.getTvShowFromLocal()
     ).pipe(
  map((resultArray:any)=> new movieDbActions.GetTvShowListFromLocalStorageSucsess(
  resultArray), catchError(err => err)))));

  @Effect ()
  public removeMovieItem$ = this.actions$.pipe(
    ofType(movieDbActions.MovieDbActionTypes.RemoveMovie),
    switchMap(( action: movieDbActions.RemoveMovie ) => from(
    this.removeMoviefromLocal(action.payload)).pipe(
    map((resultArray:any)=> new movieDbActions.GetMovieListFromLocalStorageSucsess(resultArray
    ), catchError(err => err)))));

    
  @Effect ()
  public removeTvShowItem$ = this.actions$.pipe(
    ofType(movieDbActions.MovieDbActionTypes.RemoveTvShow),
    switchMap(( action: movieDbActions.RemoveTvShow) => from(
    this.removeTvShowfromLocal(action.payload)).pipe(
    map((resultArray:any)=> new movieDbActions.GetTvShowListFromLocalStorageSucsess(resultArray
    ), catchError(err => err)))));

    @Effect ()
    public addMovie$ =this.actions$.pipe(
      ofType(movieDbActions.MovieDbActionTypes.AddMovie),
      switchMap(( action: movieDbActions.AddMovie ) => from(
      this.setNewItemToLocalStorage(action)).pipe(
      map((resultArray:any)=> new movieDbActions.GetMovieListFromLocalStorage(
      ), catchError(err => err)))));
}

 