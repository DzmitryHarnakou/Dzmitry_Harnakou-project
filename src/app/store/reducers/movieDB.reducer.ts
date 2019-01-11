import * as movieDbActions from '../actions/movieDB.actions';
import { MovieListItem } from '../models/movie-list-item';
import { TvShowListItem } from '../models/tv-show-list-item';

export interface State {
movieToSubscribe: MovieListItem;
tvShowToSubscribe: TvShowListItem;

localMovieList: MovieListItem[];
localTvShowList: TvShowListItem[];

isMovieInLib: boolean;
isTvShowInLib: boolean;

librarySubscribe: any;

ShowAddMovie: boolean;
}
   
export const initialState: State = {
  movieToSubscribe: null,
  tvShowToSubscribe: null,

  localMovieList: [],
  localTvShowList: [],

  isMovieInLib: null,
  isTvShowInLib: null,

  librarySubscribe: null,

  ShowAddMovie: false,
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

      case movieDbActions.MovieDbActionTypes.SetMovieListToLocalStorageSuccess:
      return {
        ...state,
        localMovieList: action.payload,
      };

      case movieDbActions.MovieDbActionTypes.GetMovieListFromLocalStorage:
      return state;

      case movieDbActions.MovieDbActionTypes.GetMovieListFromLocalStorageSuccess:
      return {
        ...state,
        localMovieList: action.payload,
      };

      case movieDbActions.MovieDbActionTypes.SetTvShowListToLocalStorage:
      return state;

      case movieDbActions.MovieDbActionTypes.SetTvShowListToLocalStorageSuccess:
      return {
        ...state,
        localTvShowList: action.payload,
      };

      case movieDbActions.MovieDbActionTypes.GetTvShowListFromLocalStorage:
      return state;

      case movieDbActions.MovieDbActionTypes.GetTvShowListFromLocalStorageSuccess:
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

      case movieDbActions.MovieDbActionTypes.LibrarySubscribe:
      return {
        ...state,
        librarySubscribe: action.payload,
      }

      case movieDbActions.MovieDbActionTypes.ToggleAddMovie:
      let updRes:boolean;
      if (state.ShowAddMovie === false) {
        updRes = true;
      } else {
        updRes = false;
      }
      return {
        ...state,
        ShowAddMovie: updRes,
      }

      case movieDbActions.MovieDbActionTypes.HideAddMovie:
      return {
        ...state,
        ShowAddMovie: false,
      }

      case movieDbActions.MovieDbActionTypes.AddMovie:
      return state;

      default:
        return state;
     };
}