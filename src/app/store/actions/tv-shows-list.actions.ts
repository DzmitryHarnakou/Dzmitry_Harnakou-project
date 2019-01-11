import { Action } from '@ngrx/store';
import { TvShowListItem } from '../models/tv-show-list-item';
import { TvShowData } from '../models/tv-show-data';

export enum TvShowListActionTypes {
  LoadTvShowList = '[TvShowList] LoadTvShowList',
  LoadTvShowListSuccess = '[TvShowList] LoadTvShowListSuccess',
  LoadTvShowListError = '[TvShowList] LoadTvShowListError',
  UpdateIsInLocal = '[TvShowList] UpdateIsInLocal',

  LoadNextPage = '[TvShowList] LoadNextPage',
  LoadNextPageSuccess = '[TvShowList] LoadNextPageSuccess',
  LoadNextPageError = '[TvShowList] LoadNextPageError',

  SearchTvShow = '[TvShowList] SearchTvShow',
  SearchTvShowSuccess = '[TvShowList] SearchTvShowSuccess',
  SearchTvShowError = '[TvShowList] SearchTvShowError',

  LoadNextSearchPage = '[TvShowList] LoadNextSearchPage',
  LoadNextSearchPageSuccess = '[TvShowList] LoadNextSearchPageSuccess',
  LoadNextSearchPageError = '[TvShowList] LoadNextSearchPageError',
}

export class LoadTvShowList implements Action {
  readonly type = TvShowListActionTypes.LoadTvShowList;

  constructor () {}
}

export class LoadTvShowListSuccess implements Action {
  readonly type = TvShowListActionTypes.LoadTvShowListSuccess;

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

export class LoadNextPageSuccess implements Action {
  readonly type = TvShowListActionTypes.LoadNextPageSuccess;
  
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

export class SearchTvShowSuccess implements Action {
  readonly type = TvShowListActionTypes.SearchTvShowSuccess;
  constructor (public payload:TvShowData) {}
}

export class SearchTvShowError implements Action {
  readonly type = TvShowListActionTypes.SearchTvShowError;
  constructor (public payload: string) {}
}

export class LoadNextSearchPage implements Action {
  readonly type = TvShowListActionTypes.LoadNextSearchPage;
  constructor () {}
}

export class LoadNextSearchPageSuccess implements Action {
  readonly type = TvShowListActionTypes.LoadNextSearchPageSuccess;
  constructor (public payload: TvShowData) {}
}

export class LoadNextSearchPageError implements Action {
  readonly type = TvShowListActionTypes.LoadNextSearchPageError;
  constructor (public payload: string) {}
}

export type TvShowListActions = 
  | LoadTvShowList
  | LoadTvShowListSuccess
  | LoadTvShowListError
  | UpdateIsInLocal
  | LoadNextPage
  | LoadNextPageSuccess
  | LoadNextPageError
  | SearchTvShow
  | SearchTvShowSuccess
  | SearchTvShowError
  | LoadNextSearchPage
  | LoadNextSearchPageSuccess
  | LoadNextSearchPageError

