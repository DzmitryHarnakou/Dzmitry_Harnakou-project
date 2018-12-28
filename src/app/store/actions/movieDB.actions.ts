import { Action } from '@ngrx/store';
import { MovieListItem } from '../models/movie-list-item';
import { TvShowListItem } from '../models/tv-show-list-item';

export enum MovieDbActionTypes {
    SubscribeMovie = '[MovieDb] SubscribeMovie',
    SubscribeTvShow = '[MovieDb] SubscribeTvShow',

    SetMovieListToLocalStorage = '[MovieDb] SetMovieListToLocalStorage',
    SetMovieListToLocalStorageSucsess = '[MovieDb] SetMovieListToLocalStorageSucsess',

    
    GetMovieListFromLocalStorage = '[MovieDb] GetMovieListFromLocalStorage',
    GetMovieListFromLocalStorageSucsess = '[MovieDb] GetMovieListFromLocalStorageSucsess',
}



export class SubscribeMovie implements Action {
    readonly type = MovieDbActionTypes.SubscribeMovie;
  
    constructor (public payload:MovieListItem) {}
}

export class SubscribeTvShow implements Action {
    readonly type = MovieDbActionTypes.SubscribeTvShow;
  
    constructor (public payload:TvShowListItem) {}
}



export class SetMovieListToLocalStorage implements Action {
    readonly type = MovieDbActionTypes.SetMovieListToLocalStorage;

    constructor (public payload:MovieListItem) {}
}

export class SetMovieListToLocalStorageSucsess implements Action {
    readonly type = MovieDbActionTypes.SetMovieListToLocalStorageSucsess;

    constructor (public payload:MovieListItem[]) {}
}



export class GetMovieListFromLocalStorage implements Action {
    readonly type = MovieDbActionTypes.GetMovieListFromLocalStorage;

}

export class GetMovieListFromLocalStorageSucsess implements Action {
    readonly type = MovieDbActionTypes.GetMovieListFromLocalStorageSucsess;

    constructor (public payload:MovieListItem[]) {}
}



export type MovieDbActions = 
  | SubscribeMovie
  | SubscribeTvShow

  | SetMovieListToLocalStorage
  | SetMovieListToLocalStorageSucsess

  | GetMovieListFromLocalStorage
  | GetMovieListFromLocalStorageSucsess