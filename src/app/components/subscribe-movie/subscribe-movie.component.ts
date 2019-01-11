import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers/index';
import * as  movieDbActions from '../../store/actions/movieDB.actions';
import { MovieListItem } from '../../store/models/movie-list-item';
import * as filmListActions from '../../store/actions/film-list.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subscribe-movie',
  templateUrl: './subscribe-movie.component.html',
  styleUrls: ['./subscribe-movie.component.css']
})
export class SubscribeMovieComponent implements OnInit {

  public itemDescription$:Observable<MovieListItem> = this.store.select(s => s.movieDb.movieToSubscribe);
  public isMovieInLibrary$:Observable<boolean> = this.store.select(s => s.movieDb.isMovieInLib);
  public showButton: boolean = true;

  constructor(private store:Store<fromRoot.State>) { }

  public setMovieToLocal(itemDesc: MovieListItem):void {
    this.store.dispatch(new movieDbActions.SetMovieListToLocalStorage(itemDesc));
    this.store.dispatch(new filmListActions.UpdateIsInLocal(itemDesc));
}

  ngOnInit() {
    this.store.dispatch(new movieDbActions.IsMovieInLibrary());
    this.store.dispatch(new movieDbActions.GetMovieListFromLocalStorage());
  }
}
