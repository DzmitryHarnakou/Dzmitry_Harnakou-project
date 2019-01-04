import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers/index';
import * as  movieDbActions from '../../store/actions/movieDB.actions';
import { MovieListItem } from '../../store/models/movie-list-item';
import * as filmListActions from '../../store/actions/film-list.actions';

@Component({
  selector: 'app-subscribe-movie',
  templateUrl: './subscribe-movie.component.html',
  styleUrls: ['./subscribe-movie.component.css']
})
export class SubscribeMovieComponent implements OnInit {

  private itemDescribtion$ = this.store.select(s => s.movieDb.movieToSubscribe);
  private isMovieInLibrary$ = this.store.select(s => s.movieDb.isMovieInLib);

  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch(new movieDbActions.IsMovieInLibrary());
    this.store.dispatch(new movieDbActions.GetMovieListFromLocalStorage());
  }

  public setMovieToLocal(itemDesc: MovieListItem) {
      this.store.dispatch(new movieDbActions.SetMovieListToLocalStorage(itemDesc));
      this.store.dispatch(new filmListActions.UpdateIsInLocal(itemDesc));
  }
}
