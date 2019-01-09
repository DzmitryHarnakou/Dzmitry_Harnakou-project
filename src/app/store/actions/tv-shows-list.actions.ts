import { Action } from '@ngrx/store';
import { TvShowListItem } from '../models/tv-show-list-item';
import { TvShowData } from '../models/tv-show-data';

export enum TvShowListActionTypes {
  LoadTvShowList = '[TvShowList] LoadTvShowList',
  LoadTvShowListSucsess = '[TvShowList] LoadTvShowListSucsess',
  LoadTvShowListError = '[TvShowList] LoadTvShowListError',
  UpdateIsInLocal = '[TvShowList] UpdateIsInLocal',

  LoadNextPage = '[TvShowList] LoadNextPage',
  LoadNextPageSucsess = '[TvShowList] LoadNextPageSucsess',
  LoadNextPageError = '[TvShowList] LoadNextPageError',

  SearchTvShow = '[TvShowList] SearchTvShow',
  SearchTvShowSucsess = '[TvShowList] SearchTvShowSucsess',
  SearchTvShowEror = '[TvShowList] SearchTvShowEror',

  LoadNextSearchPage = '[TvShowList] LoadNextSearchPage',
  LoadNextSearchPageSucsess = '[TvShowList] LoadNextSearchPageSucsess',
  LoadNextSearchPageEror = '[TvShowList] LoadNextSearchPageEror',
}

export class LoadTvShowList implements Action {
  readonly type = TvShowListActionTypes.LoadTvShowList;

  constructor () {}
}

export class LoadTvShowListSucsess implements Action {
  readonly type = TvShowListActionTypes.LoadTvShowListSucsess;

  constructor (public payload:any) {}
}

export class LoadTvShowListError implements Action {
  readonly type = TvShowListActionTypes.LoadTvShowListError;
  constructor (public payload:any) {}
}

export class UpdateIsInLocal implements Action {
  readonly type = TvShowListActionTypes.UpdateIsInLocal;

  constructor (public payload: TvShowListItem) {}
}

export class LoadNextPage implements Action {
  readonly type = TvShowListActionTypes.LoadNextPage;
}

export class LoadNextPageSucsess implements Action {
  readonly type = TvShowListActionTypes.LoadNextPageSucsess;
  
  constructor (public payload:any) {}
}

export class LoadNextPageError implements Action {
  readonly type = TvShowListActionTypes.LoadNextPageError;
  constructor (public payload:any) {}
}

export class SearchTvShow implements Action {
  readonly type = TvShowListActionTypes.SearchTvShow;
  constructor (public payload: any) {}
}

export class SearchTvShowSucsess implements Action {
  readonly type = TvShowListActionTypes.SearchTvShowSucsess;
  constructor (public payload:TvShowData) {}
}

export class SearchTvShowEror implements Action {
  readonly type = TvShowListActionTypes.SearchTvShow;
  constructor (public payload: string) {}
}

export class LoadNextSearchPage implements Action {
  readonly type = TvShowListActionTypes.LoadNextSearchPage;
  constructor () {}
}

export class LoadNextSearchPageSucsess implements Action {
  readonly type = TvShowListActionTypes.LoadNextSearchPageSucsess;
  constructor (public payload: TvShowData) {}
}

export class LoadNextSearchPageEror implements Action {
  readonly type = TvShowListActionTypes.LoadNextSearchPageEror;
  constructor (public payload: string) {}
}

export type TvShowListActions = 
  | LoadTvShowList
  | LoadTvShowListSucsess
  | LoadTvShowListError
  | UpdateIsInLocal
  | LoadNextPage
  | LoadNextPageSucsess
  | LoadNextPageError
  | SearchTvShow
  | SearchTvShowSucsess
  | SearchTvShowEror
  | LoadNextSearchPage
  | LoadNextSearchPageSucsess
  | LoadNextSearchPageEror

