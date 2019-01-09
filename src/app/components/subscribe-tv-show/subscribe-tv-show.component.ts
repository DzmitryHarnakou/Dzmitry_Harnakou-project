import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers/index';
import * as  movieDbActions from '../../store/actions/movieDB.actions';
import { TvShowListItem } from '../../store/models/tv-show-list-item';
import * as tvShowListActions from '../../store/actions/tv-shows-list.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subscribe-tv-show',
  templateUrl: './subscribe-tv-show.component.html',
  styleUrls: ['./subscribe-tv-show.component.css']
})
export class SubscribeTvShowComponent implements OnInit {

  private itemDescribtion$:Observable<TvShowListItem> = this.store.select(s => s.movieDb.tvShowToSubscribe);
  private isTvShowInLibrary$:Observable<boolean> = this.store.select(s => s.movieDb.isTvShowInLib);
  public showbutton:boolean = true;

  constructor(private store:Store<fromRoot.State>) { }
  
  private setMovieToLocal(itemDesc:TvShowListItem) {
      this.store.dispatch(new movieDbActions.SetTvShowListToLocalStorage(itemDesc));
      this.store.dispatch(new tvShowListActions.UpdateIsInLocal(itemDesc));
  }

  ngOnInit() {
    this.store.dispatch(new movieDbActions.IsTvShowInLibrary());
    this.store.dispatch(new movieDbActions.GetTvShowListFromLocalStorage());
  }
}
