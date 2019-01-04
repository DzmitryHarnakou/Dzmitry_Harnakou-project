import * as filmListActions from '../actions/film-list.actions'
import { MovieListItem } from '../models/movie-list-item';

export interface State {
  movieResults: MovieListItem[];
  isInLib: boolean[];
  isItemInLib: boolean;
  
  searchResults: MovieListItem[];
}

export const initialState: State = {
  movieResults: [],
  isInLib: [],
  isItemInLib: null,

  searchResults: [],
};

export function reducer(state = initialState, action: filmListActions.FilmListActions): State {
  switch (action.type) {

    case filmListActions.FilmListActionTypes.LoadFilmLists:
    return state;

    case filmListActions.FilmListActionTypes.LoadFilmListsSucsess:
    return {
      ...state,
      movieResults: action.payload.items.results,
      isInLib: action.payload.isInLib,
    }; 

    case filmListActions.FilmListActionTypes.LoadFilmListsError:
    return action.payload;

    case filmListActions.FilmListActionTypes.LoadNextPage:
    return state;

    case filmListActions.FilmListActionTypes.LoadNextPageSucsess:
    const itemsList:MovieListItem[] = action.payload.items.results;
    const updatedList:MovieListItem[] = state.movieResults.concat(itemsList);
    const isInLibItems:boolean[] = action.payload.isInLib;
    const updIsInLib: boolean[] = state.isInLib.concat(isInLibItems);
    return {
    ...state,
    movieResults:updatedList,
    isInLib: updIsInLib,
    }; 
  
    case filmListActions.FilmListActionTypes.UpdateIsInLocal:
    const item:MovieListItem = action.payload;
    const changeVal:number = state.movieResults.indexOf(item);
    state.isInLib[changeVal] = true;
    return {
      ...state,
    };

    case filmListActions.FilmListActionTypes.SearchForm:
    return state;

    case filmListActions.FilmListActionTypes.GetSearchDataSucsess:
    return {
      ...state,
      movieResults: action.payload,
    };

    case filmListActions.FilmListActionTypes.GetNextSearchPage:
    return state;

    case filmListActions.FilmListActionTypes.GetNextSearchPageSucsess:
    const newArr:MovieListItem[] = state.movieResults.concat(action.payload); 
    return {
      ...state,
      movieResults: newArr,
    } 

    default:
      return state;
   };
}
