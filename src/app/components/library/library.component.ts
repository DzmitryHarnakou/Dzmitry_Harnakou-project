import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index';
import * as movieDbActions from 'src/app/store/actions/movieDB.actions';
import { apiUrl } from "../../services/api.config";
import { MovieListItem } from 'src/app/store/models/movie-list-item';
import { TvShowListItem } from 'src/app/store/models/tv-show-list-item';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  private faBook:any = faBook;

  public apiImgUrl: string = apiUrl.imageUrl;

  public tvShowList$:Observable<TvShowListItem[]> = this.store.select(s=>s.movieDb.localTvShowList);
  
  public filmsList$:Observable<MovieListItem[]> = this.store.select(s=>s.movieDb.localMovieList);
  
  public constructor(private store:Store<fromRoot.State>) {}

  public removeMovie(item:MovieListItem) {
    this.store.dispatch(new movieDbActions.RemoveMovie(item));
    return false;
  }

  public removeTvShow(item:TvShowListItem) {
    this.store.dispatch(new movieDbActions.RemoveTvShow(item));
    return false;
  }

  public subscribeItem(item:MovieListItem | TvShowListItem) {
    this.store.dispatch(new movieDbActions.LibrarySubscribe(item));
  }
  
  ngOnInit() {
    this.store.dispatch(new movieDbActions.GetMovieListFromLocalStorage());
    this.store.dispatch(new movieDbActions.GetTvShowListFromLocalStorage());
  }
}
