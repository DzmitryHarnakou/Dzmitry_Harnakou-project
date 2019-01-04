import * as tvShowListActions from '../actions/tv-shows-list.actions';
import { TvShowListItem } from '../models/tv-show-list-item';

export interface State {
  tvShowResults: TvShowListItem[],
  isInLib: boolean[],
  isItemInLib: boolean;
}

export const initialState: State = {
  tvShowResults: [],
  isInLib: [],
  isItemInLib: null,
};

export function reducer(state = initialState, action: tvShowListActions.TvShowListActions): State {
  switch (action.type) {

    case tvShowListActions.TvShowListActionTypes.LoadTvShowList:
    return state;

    case tvShowListActions.TvShowListActionTypes.LoadTvShowListSucsess:
    return {
      ...state,
      tvShowResults: action.payload.items.results,
      isInLib: action.payload.isInLib,
    }; 

    case tvShowListActions.TvShowListActionTypes.LoadTvShowListError:
    return action.payload;

    case tvShowListActions.TvShowListActionTypes.LoadNextPage:
    return state;

    case tvShowListActions.TvShowListActionTypes.LoadNextPageSucsess:
    const itemsList:TvShowListItem[] = action.payload.items.results;
    const updatedList:TvShowListItem[] = state.tvShowResults.concat(itemsList);
    const isInLibItems:boolean[] = action.payload.isInLib;
    const updIsInLib: boolean[] = state.isInLib.concat(isInLibItems);
    return {
      ...state,
      tvShowResults:updatedList,
      isInLib: updIsInLib,
    }; 

    case tvShowListActions.TvShowListActionTypes.LoadTvShowListError:
    return action.payload;

    case tvShowListActions.TvShowListActionTypes.UpdateIsInLocal:
    const item:TvShowListItem = action.payload;
    const changeVal = state.tvShowResults.indexOf(item);
    state.isInLib[changeVal] = true;
    return {
      ...state,
    };

    default:
      return state;
   };
}
