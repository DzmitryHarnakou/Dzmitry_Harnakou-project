import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { apiUrl } from '../../services/api.config';

import * as fromRoot from '../../store/reducers/index'
import * as filmListActions from '../../store/actions/film-list.actions';
import * as  movieDbActions from '../../store/actions/movieDB.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Output() getTargetDescription = new EventEmitter();

  public apiImgUrl: string = apiUrl.imageUrl;

  public filmsList$ = this.store.select(s => s.fimsList);

  public constructor(private store:Store<fromRoot.State>) {}

  onScroll(){
    this.store.dispatch(new filmListActions.LoadNextPage());
  }

  ngOnInit() {
    this.store.dispatch(new filmListActions.LoadFilmLists());
  }

  getItem(i) {
    this.store.dispatch(new movieDbActions.SubscribeMovie(i));
  }

}
