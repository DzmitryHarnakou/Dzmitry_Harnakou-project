import { Action } from '@ngrx/store';
import { MovieListItem } from '../models/movie-list-item';
import { MovieData } from '../models/movie-data';

export enum FilmListActionTypes {
  LoadFilmLists = '[FilmList] LoadFilmLists',
  LoadFilmListsSucsess = '[FilmList] LoadFilmListsSucsess',
  LoadFilmListsError = '[FilmList] LoadFilmListsError',
  UpdateIsInLocal = '[FilmList] UpdateIsInLocal',

  LoadNextPage = '[FilmList] LoadNextPage',
  LoadNextPageSucsess = '[FilmList] LoadNextPageSucsess',
  LoadNextPageError = '[FilmList] LoadNextPageError',

  SearchFilms = '[FilmList] SearchFilms',
  SearchFilmsSucsess = '[FilmList] SearchFilmsSucsess',
  SearchFilmsEror = '[FilmList] SearchFilmsEror',

  LoadNextSearchPage = '[FilmList] LoadNextSearchPage',
  LoadNextSearchPageSucsess = '[FilmList] LoadNextSearchPageSucsess',
  LoadNextSearchPageEror = '[FilmList] LoadNextSearchPageEror',
}

export class LoadFilmLists implements Action {
  readonly type = FilmListActionTypes.LoadFilmLists;

  constructor () {}
}

export class LoadFilmListsSucsess implements Action {
  readonly type = FilmListActionTypes.LoadFilmListsSucsess;

  constructor (public payload:any) {}
}

export class LoadFilmListsError implements Action {
  readonly type = FilmListActionTypes.LoadFilmListsError;
  constructor (public payload:any) {}
}

export class UpdateIsInLocal implements Action {
  readonly type = FilmListActionTypes.UpdateIsInLocal;

  constructor (public payload: MovieListItem) {}
}

export class LoadNextPage implements Action {
  readonly type = FilmListActionTypes.LoadNextPage;
}

export class LoadNextPageSucsess implements Action {
  readonly type = FilmListActionTypes.LoadNextPageSucsess;
  
  constructor (public payload:any) {}
}

export class LoadNextPageError implements Action {
  readonly type = FilmListActionTypes.LoadNextPageError;
  constructor (public payload:any) {}
}

export class SearchFilms implements Action {
  readonly type = FilmListActionTypes.SearchFilms;
  constructor (public payload: any) {}
}

export class SearchFilmsSucsess implements Action {
  readonly type = FilmListActionTypes.SearchFilmsSucsess;
  constructor (public payload:MovieData) {}
}

export class SearchFilmsEror implements Action {
  readonly type = FilmListActionTypes.SearchFilms;
  constructor (public payload: string) {}
}

export class LoadNextSearchPage implements Action {
  readonly type = FilmListActionTypes.LoadNextSearchPage;
  constructor () {}
}

export class LoadNextSearchPageSucsess implements Action {
  readonly type = FilmListActionTypes.LoadNextSearchPageSucsess;
  constructor (public payload: MovieData) {}
}

export class LoadNextSearchPageEror implements Action {
  readonly type = FilmListActionTypes.LoadNextSearchPageEror;
  constructor (public payload: string) {}
}

export type FilmListActions = 
  | LoadFilmLists
  | LoadFilmListsSucsess
  | LoadFilmListsError
  | UpdateIsInLocal 
  | LoadNextPage
  | LoadNextPageSucsess
  | LoadNextPageError

  | SearchFilms
  | SearchFilmsSucsess
  | SearchFilmsEror

  | LoadNextSearchPage
  | LoadNextSearchPageSucsess
  | LoadNextSearchPageEror