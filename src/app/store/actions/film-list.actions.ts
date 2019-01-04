import { Action } from '@ngrx/store';
import { MovieListItem } from '../models/movie-list-item';

export enum FilmListActionTypes {
  LoadFilmLists = '[FilmList] LoadFilmLists',
  LoadFilmListsSucsess = '[FilmList] LoadFilmListsSucsess',
  LoadFilmListsError = '[FilmList] LoadFilmListsError',
  UpdateIsInLocal = '[FilmList] UpdateIsInLocal',

  LoadNextPage = '[FilmList] LoadNextPage',
  LoadNextPageSucsess = '[FilmList] LoadNextPageSucsess',
  LoadNextPageError = '[FilmList] LoadNextPageError',

  SearchForm = '[FilmList] SearchForm',
  GetSearchDataSucsess = '[FilmList] GetSearchDataSucsess',
  GetNextSearchPage = '[FilmList] GetNextSearchPage',
  GetNextSearchPageSucsess = '[FilmList] GetNextSearchPageSucsess'
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

export class SearchForm implements Action {
  readonly type = FilmListActionTypes.SearchForm;
}

export class GetSearchDataSucsess implements Action {
  readonly type = FilmListActionTypes.GetSearchDataSucsess;

  constructor (public payload: MovieListItem[]) {}
} 

export class GetNextSearchPage implements Action {
  readonly type = FilmListActionTypes.GetNextSearchPage;
}

export class GetNextSearchPageSucsess implements Action {
  readonly type = FilmListActionTypes.GetNextSearchPageSucsess;

  constructor (public payload: MovieListItem[]) {}
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
  | UpdateIsInLocal 
  | LoadNextPage
  | LoadNextPageSucsess
  | LoadNextPageError

  | SearchForm
  | GetSearchDataSucsess
  | GetNextSearchPage
  | GetNextSearchPageSucsess