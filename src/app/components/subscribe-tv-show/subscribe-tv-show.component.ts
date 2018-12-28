import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers/index';
import * as  movieDbActions from '../../store/actions/movieDB.actions';

import { TvShowListItem } from '../../store/models/tv-show-list-item';

@Component({
  selector: 'app-subscribe-tv-show',
  templateUrl: './subscribe-tv-show.component.html',
  styleUrls: ['./subscribe-tv-show.component.css']
})
export class SubscribeTvShowComponent implements OnInit {

  private itemDescribtion$ = this.store.select(s => s.movieDb.tvShowToSubscribe);

  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
  }

  setToLocalStorage() {
  }

}
