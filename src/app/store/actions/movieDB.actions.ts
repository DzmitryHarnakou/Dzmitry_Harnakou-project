import { Action } from '@ngrx/store';
import { MovieListItem } from '../models/movie-list-item';
import { TvShowListItem } from '../models/tv-show-list-item';

export enum MovieDbActionTypes {
    
    SubscribeMovie = '[MovieDb] SubscribeMovie',
    SubscribeTvShow = '[MovieDb] SubscribeTvShow',

    SetMovieListToLocalStorage = '[MovieDb] SetMovieListToLocalStorage',
    SetMovieListToLocalStorageSuccess = '[MovieDb] SetMovieListToLocalStorageSuccess',

    GetMovieListFromLocalStorage = '[MovieDb] GetMovieListFromLocalStorage',
    GetMovieListFromLocalStorageSuccess = '[MovieDb] GetMovieListFromLocalStorageSuccess',

    SetTvShowListToLocalStorage = '[MovieDb] SetTvShowListToLocalStorage',
    SetTvShowListToLocalStorageSuccess = '[MovieDb] SetTvShowListToLocalStorageSuccess',

    GetTvShowListFromLocalStorage = '[MovieDb] GetTvShowListFromLocalStorage',
    GetTvShowListFromLocalStorageSuccess = '[MovieDb] GetTvShowListFromLocalStorageSuccess',

    RemoveMovie = '[MovieDb] RemoveMovie',
    RemoveTvShow = '[MovieDb] RemoveTvShow',

    IsMovieInLibrary = '[MovieDb] IsMovieInLibrary',
    IsTvShowInLibrary = '[MovieDb] IsTvShowInLibrary',

    LibrarySubscribe = '[MovieDb] LibrarySubscribe',

    ToggleAddMovie = '[MovieDb] ToggleAddMovie',
    HideAddMovie = '[MovieDb] HideAddMovie',

    AddMovie = '[MovieDb] AddMovie',
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

export class SetMovieListToLocalStorageSuccess implements Action {
    readonly type = MovieDbActionTypes.SetMovieListToLocalStorageSuccess;

    constructor (public payload:MovieListItem[]) {}
}

export class GetMovieListFromLocalStorage implements Action {
    readonly type = MovieDbActionTypes.GetMovieListFromLocalStorage;

}

export class GetMovieListFromLocalStorageSuccess implements Action {
    readonly type = MovieDbActionTypes.GetMovieListFromLocalStorageSuccess;

    constructor (public payload:MovieListItem[]) {}
}

export class SetTvShowListToLocalStorage implements Action {
    readonly type = MovieDbActionTypes.SetTvShowListToLocalStorage;

    constructor (public payload:TvShowListItem) {}
}

export class SetTvShowListToLocalStorageSuccess implements Action {
    readonly type = MovieDbActionTypes.SetTvShowListToLocalStorageSuccess;

    constructor (public payload:TvShowListItem[]) {}
}

export class GetTvShowListFromLocalStorage implements Action {
    readonly type = MovieDbActionTypes.GetTvShowListFromLocalStorage;

}

export class GetTvShowListFromLocalStorageSuccess implements Action {
    readonly type = MovieDbActionTypes.GetTvShowListFromLocalStorageSuccess;

    constructor (public payload:TvShowListItem[]) {}
}

export class RemoveMovie implements Action {
    readonly type = MovieDbActionTypes.RemoveMovie;

    constructor (public payload:MovieListItem) {}
}

export class RemoveTvShow implements Action {
    readonly type = MovieDbActionTypes.RemoveTvShow;

    constructor (public payload:TvShowListItem) {}
}

export class IsMovieInLibrary implements Action {
    readonly type = MovieDbActionTypes.IsMovieInLibrary;
}

export class IsTvShowInLibrary implements Action {
    readonly type = MovieDbActionTypes.IsTvShowInLibrary;
}

export class LibrarySubscribe implements Action {
    readonly type = MovieDbActionTypes.LibrarySubscribe;

    constructor (public payload:any) {}
}

export class ToggleAddMovie implements Action {
    readonly type = MovieDbActionTypes.ToggleAddMovie;
}

export class HideAddMovie implements Action {
    readonly type = MovieDbActionTypes.HideAddMovie;
}

export class AddMovie implements Action {
    readonly type = MovieDbActionTypes.AddMovie;

    constructor (public payload:any, public file:any) {}
}

export type MovieDbActions = 
  | SubscribeMovie
  | SubscribeTvShow


  | SetMovieListToLocalStorage
  | SetMovieListToLocalStorageSuccess

  | GetMovieListFromLocalStorage
  | GetMovieListFromLocalStorageSuccess

  | SetTvShowListToLocalStorage
  | SetTvShowListToLocalStorageSuccess

  | GetTvShowListFromLocalStorage
  | GetTvShowListFromLocalStorageSuccess

  | RemoveMovie
  | RemoveTvShow

  | IsMovieInLibrary
  | IsTvShowInLibrary
  | LibrarySubscribe

  | ToggleAddMovie
  | HideAddMovie
  | AddMovie