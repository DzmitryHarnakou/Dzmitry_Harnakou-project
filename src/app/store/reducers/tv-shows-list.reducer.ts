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

    case tvShowListActions.TvShowListActionTypes.LoadTvShowListSuccess:
    return {
      ...state,
      tvShowResults: action.payload.items.results,
      isInLib: action.payload.isInLib,
    }; 

    case tvShowListActions.TvShowListActionTypes.LoadTvShowListError:
    return action.payload;

    case tvShowListActions.TvShowListActionTypes.LoadNextPage:
    return state;

    case tvShowListActions.TvShowListActionTypes.LoadNextPageSuccess:
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

    case tvShowListActions.TvShowListActionTypes.SearchTvShow:
    return state;

    case tvShowListActions.TvShowListActionTypes.SearchTvShowSuccess:
    return {
      ...state,
      tvShowResults: action.payload.results,
    }

    case tvShowListActions.TvShowListActionTypes.LoadNextSearchPage:
    return state;

    case tvShowListActions.TvShowListActionTypes.LoadNextSearchPageSuccess:
    const itemList:TvShowListItem[] = action.payload.results;
    const updatedItemList:TvShowListItem[] = state.tvShowResults.concat(itemList);
    return {
      ...state,
      tvShowResults: updatedItemList,
    };

    case tvShowListActions.TvShowListActionTypes.LoadNextSearchPageError:
    return {
      ...state,
    }
    
    default:
      return state;
   };
}
