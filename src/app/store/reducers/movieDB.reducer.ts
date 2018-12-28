import * as movieDbActions from '../actions/movieDB.actions';
import { MovieListItem } from '../models/movie-list-item';
import { TvShowListItem } from '../models/tv-show-list-item';

export interface State {
movieToSubscribe: MovieListItem;
tvShowToSubscribe: TvShowListItem;

localMovieList: MovieListItem[];
localTvShowList: TvShowListItem[];
}
   
export const initialState: State = {
  movieToSubscribe: null,
  tvShowToSubscribe: null,

  localMovieList: [],
  localTvShowList: [],
};

export function reducer(state = initialState, action: movieDbActions.MovieDbActions): State {
    switch (action.type) {
      case movieDbActions.MovieDbActionTypes.SubscribeMovie:
      return {
        ...state,
        movieToSubscribe: action.payload,
      };

      case movieDbActions.MovieDbActionTypes.SubscribeTvShow:
      return {
        ...state,
        tvShowToSubscribe: action.payload,
      };

      case movieDbActions.MovieDbActionTypes.SetMovieListToLocalStorage:
      return state;

      case movieDbActions.MovieDbActionTypes.SetMovieListToLocalStorageSucsess:
      return {
        ...state,
        localMovieList: action.payload,
      };

      case movieDbActions.MovieDbActionTypes.GetMovieListFromLocalStorage:
      return state;

      case movieDbActions.MovieDbActionTypes.GetMovieListFromLocalStorageSucsess:
      return {
        ...state,
        localMovieList: action.payload,
      };

      case movieDbActions.MovieDbActionTypes.SetTvShowListToLocalStorage:
      return state;

      case movieDbActions.MovieDbActionTypes.SetTvShowListToLocalStorageSucsess:
      return {
        ...state,
        localTvShowList: action.payload,
      };

      case movieDbActions.MovieDbActionTypes.GetTvShowListFromLocalStorage:
      return state;

      case movieDbActions.MovieDbActionTypes.GetTvShowListFromLocalStorageSucsess:
      return {
        ...state,
        localTvShowList: action.payload,
      };

      default:
        return state;
     };
}