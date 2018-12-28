import * as filmListActions from '../actions/film-list.actions'
import { MovieListItem } from '../models/movie-list-item';

export interface State {
  results: MovieListItem[],
}

export const initialState: State = {
  results: [],
};

export function reducer(state = initialState, action: filmListActions.FilmListActions): State {
  switch (action.type) {
    case filmListActions.FilmListActionTypes.LoadFilmLists:
    return state;

    case filmListActions.FilmListActionTypes.LoadFilmListsSucsess:
    return {
      ...state,
      results: action.payload.results
    }; 

    case filmListActions.FilmListActionTypes.LoadFilmListsError:
    return action.payload;



    case filmListActions.FilmListActionTypes.LoadNextPage:
    return state;

    case filmListActions.FilmListActionTypes.LoadNextPageSucsess:
      const itemsList:MovieListItem[] = action.payload.results
      const updatedList:MovieListItem[] = state.results.concat(itemsList)
    return {
      ...state,
      results:updatedList,
    }; 

    case filmListActions.FilmListActionTypes.LoadNextPageError:
    return action.payload;

    default:
      return state;
   };
}
