import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { apiUrl } from '../../services/api.config';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';
import { MovieListItem } from '../../store/models/movie-list-item';
import { TvShowListItem } from '../../store/models/tv-show-list-item';


import { LocalStorageService } from '../../services/local-storage.service';


import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers/index'
import * as  movieDbActions from '../../store/actions/movieDB.actions';


@Component({
  selector: 'app-subscribe-item-window',
  templateUrl: './subscribe-item-window.component.html',
  styleUrls: ['./subscribe-item-window.component.css']
})
export class SubscribeItemWindowComponent implements OnInit {
  
  faTimes:object = faTimes;
  faStar:object = faStar;

  @Input () itemDescribtion: MovieListItem;  

  public apiImgUrl: string = apiUrl.imageUrl;

  public constructor(private store:Store<fromRoot.State>, public _localStorageService: LocalStorageService) {}

  ngOnInit() {
  }

  setToLocal() {
    this.store.dispatch(new movieDbActions.SetMovieListToLocalStorage(this.itemDescribtion));
  }

}
