import * as movieDbActions from '../actions/movieDB.actions';
import { MovieListItem } from '../models/movie-list-item';
import { TvShowListItem } from '../models/tv-show-list-item';
import { validateConfig } from '@angular/router/src/config';

export interface State {
movieToSubscribe: MovieListItem;
tvShowToSubscribe: TvShowListItem;

localMovieList: MovieListItem[];
localTvShowList: TvShowListItem[];

isMovieInLib: boolean;
isTvShowInLib: boolean;
}
   
export const initialState: State = {
  movieToSubscribe: null,
  tvShowToSubscribe: null,

  localMovieList: [],
  localTvShowList: [],

  isMovieInLib: null,
  isTvShowInLib: null,
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

      case movieDbActions.MovieDbActionTypes.RemoveMovie:
      return state;

      case movieDbActions.MovieDbActionTypes.RemoveTvShow:
      return state;

      case movieDbActions.MovieDbActionTypes.IsMovieInLibrary:
      var movieVal:boolean = false;
      for (var l = 0; l < state.localMovieList.length; l++) {
        if (Number(state.localMovieList[l].id) === Number(state.movieToSubscribe.id)) {
            movieVal = true; 
          } continue;
        } 
      return {
        ...state,
        isMovieInLib: movieVal,
      };

      case movieDbActions.MovieDbActionTypes.IsTvShowInLibrary:
      var tvShowVal:boolean = false;
      for (var i = 0; i < state.localTvShowList.length; i++) {
        if (Number(state.localTvShowList[i].id) === Number(state.tvShowToSubscribe.id)) {
          tvShowVal = true; 
          } continue;
        } 
      return {
        ...state,
        isTvShowInLib: tvShowVal,
      };

      default:
        return state;
     };
}