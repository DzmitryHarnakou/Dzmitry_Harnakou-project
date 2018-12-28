import { Action } from '@ngrx/store';

export enum TvShowListActionTypes {
  LoadTvShowList = '[TvShowList] LoadTvShowList',
  LoadTvShowListSucsess = '[TvShowList] LoadTvShowListSucsess',
  LoadTvShowListError = '[TvShowList] LoadTvShowListError',

  LoadNextPage = '[TvShowList] LoadNextPage',
  LoadNextPageSucsess = '[TvShowList] LoadNextPageSucsess',
  LoadNextPageError = '[TvShowList] LoadNextPageError',
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

export type TvShowListActions = 
  | LoadTvShowList
  | LoadTvShowListSucsess
  | LoadTvShowListError
  | LoadNextPage
  | LoadNextPageSucsess
  | LoadNextPageError
