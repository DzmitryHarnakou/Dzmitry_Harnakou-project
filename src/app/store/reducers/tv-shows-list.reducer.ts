import * as tvShowListActions from '../actions/tv-shows-list.actions';
import { TvShowListItem } from '../models/tv-show-list-item';

export interface State {
  results: TvShowListItem[],
}

export const initialState: State = {
  results: [],
};

export function reducer(state = initialState, action: tvShowListActions.TvShowListActions): State {
  switch (action.type) {
    case tvShowListActions.TvShowListActionTypes.LoadTvShowList:
    return state;

    case tvShowListActions.TvShowListActionTypes.LoadTvShowListSucsess:
    return {
      ...state,
      results: action.payload.results,
    }; 

    case tvShowListActions.TvShowListActionTypes.LoadTvShowListError:
    return action.payload;



    case tvShowListActions.TvShowListActionTypes.LoadNextPage:
    return state;

    case tvShowListActions.TvShowListActionTypes.LoadNextPageSucsess:
      const itemsList:TvShowListItem[] = action.payload.results
      const updatedList:TvShowListItem[] = state.results.concat(itemsList)
    return {
      ...state,
      results:updatedList,
    }; 

    case tvShowListActions.TvShowListActionTypes.LoadNextPageError:
    return action.payload;

    default:
      return state;
   };
}
