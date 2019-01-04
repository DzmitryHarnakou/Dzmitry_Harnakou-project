import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers/index';
import * as  movieDbActions from '../../store/actions/movieDB.actions';
import { TvShowListItem } from '../../store/models/tv-show-list-item';
import * as tvShowListActions from '../../store/actions/tv-shows-list.actions';

@Component({
  selector: 'app-subscribe-tv-show',
  templateUrl: './subscribe-tv-show.component.html',
  styleUrls: ['./subscribe-tv-show.component.css']
})
export class SubscribeTvShowComponent implements OnInit {

  private itemDescribtion$ = this.store.select(s => s.movieDb.tvShowToSubscribe);
  private isTvShowInLibrary$ = this.store.select(s => s.movieDb.isTvShowInLib);


  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch(new movieDbActions.IsTvShowInLibrary());
    this.store.dispatch(new movieDbActions.GetTvShowListFromLocalStorage());
  }

  setMovieToLocal(itemDesc:TvShowListItem) {
      this.store.dispatch(new movieDbActions.SetTvShowListToLocalStorage(itemDesc));
      this.store.dispatch(new tvShowListActions.UpdateIsInLocal(itemDesc));
  }
}
