import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromFilmsList from './films-list.reducer';
import * as fromTvShowList from './tv-shows-list.reducer';
import * as fromMovieDb from './movieDB.reducer';

export interface State {

  movieDb: fromMovieDb.State;
  filmsList: fromFilmsList.State;
  tvShowList: fromTvShowList.State;

}

export const reducers: ActionReducerMap<State> = {

  filmsList: fromFilmsList.reducer,
  tvShowList: fromTvShowList.reducer,
  movieDb: fromMovieDb.reducer,
  
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
