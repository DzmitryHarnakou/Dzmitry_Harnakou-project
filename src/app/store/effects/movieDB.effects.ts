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

  async setMovieToLocal(action:any) {
    return this._localStorageService.setMovieToLocalStorage(action.payload)
  }

  async getMovieFromLocal() {
    return this._localStorageService.getMovieListFromLocalStorage()
  }


  async setTvShowToLocal(action:any) {
    return this._localStorageService.setTvShowToLocalStorage(action.payload)
  }

  async getTvShowFromLocal() {
    return this._localStorageService.getTvShowListFromLocalStorage()
  }
  

  @Effect ()
  public setMovieToLocalStorage$ = this.actions$.pipe(
  ofType(movieDbActions.MovieDbActionTypes.SetMovieListToLocalStorage),
  switchMap(( action: movieDbActions.SetMovieListToLocalStorage ) => from(
  this.setMovieToLocal(action)).pipe(
  map((resultArray:any)=> new movieDbActions.SetMovieListToLocalStorageSucsess(
  resultArray), catchError(err => err)))));
  

  @Effect ()
  public getMovieToLocalStorage$ = this.actions$.pipe(
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
}

 