import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LocalStorageService } from '../../services/local-storage.service';
import { switchMap, mapTo, tap, map, catchError } from 'rxjs/operators';
import * as movieDbActions from '../actions/movieDB.actions';
import  { Store } from '@ngrx/store';
import { Observable, of, from } from 'rxjs';
import * as fromRoot from '../reducers/index';
import { MovieListItem } from '../models/movie-list-item';



@Injectable()
export class MovieDbEffects {

  constructor(private actions$: Actions,
              private _localStorageService: LocalStorageService,
              private  store:Store<fromRoot.State>) {}

  async set(action:any) {
    return this._localStorageService.setMovieToLocalStorage(action.payload)
  }

  async get() {
    return this._localStorageService.getMovieListFromLocalStorage()
  }

  @Effect ()
  public setMovieToLocalStorage$ = this.actions$.pipe(
  ofType(movieDbActions.MovieDbActionTypes.SetMovieListToLocalStorage),
  switchMap(( action: movieDbActions.SetMovieListToLocalStorage ) => from(
  this.set(action)).pipe(
  map((resultArray:any)=> new movieDbActions.SetMovieListToLocalStorageSucsess(
  resultArray), catchError(err => err)))));
  

  @Effect ()
  public getMovieToLocalStorage$ = this.actions$.pipe(
  ofType(movieDbActions.MovieDbActionTypes.GetMovieListFromLocalStorage),
  switchMap(() => from(this.get()
     ).pipe(
  map((resultArray:any)=> new movieDbActions.GetMovieListFromLocalStorageSucsess(
  resultArray), catchError(err => err)))));
  
}

 