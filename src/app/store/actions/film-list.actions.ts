import { Action } from '@ngrx/store';
import { MovieListItem } from '../models/movie-list-item';
import { MovieData } from '../models/movie-data';

export enum FilmListActionTypes {
  LoadFilmLists = '[FilmList] LoadFilmLists',
  LoadFilmListsSuccess = '[FilmList] LoadFilmListsSuccess',
  LoadFilmListsError = '[FilmList] LoadFilmListsError',
  UpdateIsInLocal = '[FilmList] UpdateIsInLocal',

  LoadNextPage = '[FilmList] LoadNextPage',
  LoadNextPageSuccess = '[FilmList] LoadNextPageSuccess',
  LoadNextPageError = '[FilmList] LoadNextPageError',

  SearchFilms = '[FilmList] SearchFilms',
  SearchFilmsSuccess = '[FilmList] SearchFilmsSuccess',
  SearchFilmsError = '[FilmList] SearchFilmsError',

  LoadNextSearchPage = '[FilmList] LoadNextSearchPage',
  LoadNextSearchPageSuccess = '[FilmList] LoadNextSearchPageSuccess',
  LoadNextSearchPageError = '[FilmList] LoadNextSearchPageError',
}

export class LoadFilmLists implements Action {
  readonly type = FilmListActionTypes.LoadFilmLists;

  constructor () {}
}

export class LoadFilmListsSuccess implements Action {
  readonly type = FilmListActionTypes.LoadFilmListsSuccess;

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

export class LoadNextPageSuccess implements Action {
  readonly type = FilmListActionTypes.LoadNextPageSuccess;
  
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

export class SearchFilmsSuccess implements Action {
  readonly type = FilmListActionTypes.SearchFilmsSuccess;
  constructor (public payload:MovieData) {}
}

export class SearchFilmsError implements Action {
  readonly type = FilmListActionTypes.SearchFilms;
  constructor (public payload: string) {}
}

export class LoadNextSearchPage implements Action {
  readonly type = FilmListActionTypes.LoadNextSearchPage;
  constructor () {}
}

export class LoadNextSearchPageSuccess implements Action {
  readonly type = FilmListActionTypes.LoadNextSearchPageSuccess;
  constructor (public payload: MovieData) {}
}

export class LoadNextSearchPageError implements Action {
  readonly type = FilmListActionTypes.LoadNextSearchPageError;
  constructor (public payload: string) {}
}

export type FilmListActions = 
  | LoadFilmLists
  | LoadFilmListsSuccess
  | LoadFilmListsError
  | UpdateIsInLocal 
  | LoadNextPage
  | LoadNextPageSuccess
  | LoadNextPageError

  | SearchFilms
  | SearchFilmsSuccess
  | SearchFilmsError

  | LoadNextSearchPage
  | LoadNextSearchPageSuccess
  | LoadNextSearchPageError