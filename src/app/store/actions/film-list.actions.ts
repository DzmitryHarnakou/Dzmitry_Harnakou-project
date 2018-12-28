import { Action } from '@ngrx/store';

export enum FilmListActionTypes {
  LoadFilmLists = '[FilmList] LoadFilmLists',
  LoadFilmListsSucsess = '[FilmList] LoadFilmListsSucsess',
  LoadFilmListsError = '[FilmList] LoadFilmListsError',

  LoadNextPage = '[FilmList] LoadNextPage',
  LoadNextPageSucsess = '[FilmList] LoadNextPageSucsess',
  LoadNextPageError = '[FilmList] LoadNextPageError',

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

export type FilmListActions = 
  | LoadFilmLists
  | LoadFilmListsSucsess
  | LoadFilmListsError
  | LoadNextPage
  | LoadNextPageSucsess
  | LoadNextPageError
