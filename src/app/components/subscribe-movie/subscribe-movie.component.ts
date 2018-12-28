import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers/index';
import * as  movieDbActions from '../../store/actions/movieDB.actions';
import { MovieListItem } from '../../store/models/movie-list-item';

@Component({
  selector: 'app-subscribe-movie',
  templateUrl: './subscribe-movie.component.html',
  styleUrls: ['./subscribe-movie.component.css']
})
export class SubscribeMovieComponent implements OnInit {

  private itemDescribtion$ = this.store.select(s => s.movieDb.movieToSubscribe);

  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
  }

  setMovieToLocal(itemDesc: MovieListItem) {
      this.store.dispatch(new movieDbActions.SetMovieListToLocalStorage(itemDesc));
  }

}
