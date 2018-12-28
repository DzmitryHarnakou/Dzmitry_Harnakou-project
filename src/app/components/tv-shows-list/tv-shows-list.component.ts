import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { apiUrl } from '../../services/api.config';

import * as fromRoot from '../../store/reducers/index'
import * as tvShowListActions from '../../store/actions/tv-shows-list.actions';
import * as movieDbActions from '../../store/actions/movieDB.actions';


@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.css']
})
export class TvShowsListComponent implements OnInit {

  public apiImgUrl: string = apiUrl.imageUrl;

  public tvShowList$ = this.store.select((s => s.tvShowList))

  public constructor(private store:Store<fromRoot.State>) {}

  onScroll(){
    this.store.dispatch(new tvShowListActions.LoadNextPage());
  }

  ngOnInit() {
    this.store.dispatch(new tvShowListActions.LoadTvShowList());
  }

  getItem(i) {
    this.store.dispatch(new movieDbActions.SubscribeTvShow(i));
  }

}