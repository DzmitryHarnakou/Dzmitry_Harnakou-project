import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers/index';
import { Observable } from 'rxjs';
import { MovieListItem } from 'src/app/store/models/movie-list-item';
import { TvShowListItem } from 'src/app/store/models/tv-show-list-item';


@Component({
  selector: 'app-subscribe-library',
  templateUrl: './subscribe-library.component.html',
  styleUrls: ['./subscribe-library.component.css']
})
export class SubscribeLibraryComponent implements OnInit {

  public showButton:boolean = false;

  constructor(private store:Store<fromRoot.State>) { }

  public itemSubscription$:Observable<MovieListItem | TvShowListItem> = this.store.select(s => s.movieDb.librarySubscribe);

  ngOnInit() {
  }

}
