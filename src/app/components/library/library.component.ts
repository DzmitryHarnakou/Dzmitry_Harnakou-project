import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index';
import * as movieDbActions from 'src/app/store/actions/movieDB.actions';
import { apiUrl } from "../../services/api.config";
import { MovieListItem } from 'src/app/store/models/movie-list-item';
import { TvShowListItem } from 'src/app/store/models/tv-show-list-item';
import { faBook, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  public fontSize: string = '0.7em';

  public faBook:IconDefinition = faBook;

  public apiImgUrl: string = apiUrl.imageUrl;

  public tvShowList$:Observable<TvShowListItem[]> = this.store.select(s=>s.movieDb.localTvShowList);
  
  public filmsList$:Observable<MovieListItem[]> = this.store.select(s=>s.movieDb.localMovieList);
  
  constructor(private store:Store<fromRoot.State>) {}

  public removeMovie(item:MovieListItem):boolean {
    this.store.dispatch(new movieDbActions.RemoveMovie(item));
    return false;
  }

  public removeTvShow(item:TvShowListItem):boolean {
    this.store.dispatch(new movieDbActions.RemoveTvShow(item));
    return false;
  }

  public subscribeItem(item:MovieListItem | TvShowListItem):void {
    this.store.dispatch(new movieDbActions.LibrarySubscribe(item));
  }

  public trackByMovie(index:number, item: MovieListItem): number {
    return item.id;
  }

  public trackByTvShow (index:number, item: TvShowListItem): number {
    return item.id;
  }
  
  ngOnInit() {
    this.store.dispatch(new movieDbActions.GetMovieListFromLocalStorage());
    this.store.dispatch(new movieDbActions.GetTvShowListFromLocalStorage());
  }
}
