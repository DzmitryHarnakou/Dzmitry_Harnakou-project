import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromFimsList from './fims-list.reducer';
import * as fromTvShowList from './tv-shows-list.reducer';
import * as fromMovieDb from './movieDB.reducer';

export interface State {

  movieDb: fromMovieDb.State;
  fimsList: fromFimsList.State;
  tvShowList: fromTvShowList.State;

}

export const reducers: ActionReducerMap<State> = {

  fimsList: fromFimsList.reducer,
  tvShowList: fromTvShowList.reducer,
  movieDb: fromMovieDb.reducer,
  
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
