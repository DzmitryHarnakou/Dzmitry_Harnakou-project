import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index';
import * as movieDbActions from 'src/app/store/actions/movieDB.actions';
import { apiUrl } from "../../services/api.config";
import { MovieListItem } from 'src/app/store/models/movie-list-item';
import { TvShowListItem } from 'src/app/store/models/tv-show-list-item';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  faBook = faBook;

  public apiImgUrl: string = apiUrl.imageUrl;

  public tvShowList$ = this.store.select(s=>s.movieDb.localTvShowList);
  
  public filmsList$ = this.store.select(s=>s.movieDb.localMovieList);

  public constructor(private store:Store<fromRoot.State>) {}

  public showMov:boolean = false;
  public showMovVal: MovieListItem;
  public showShow:boolean = false;
  public showShowVal: TvShowListItem;

  public removeMovie(item:MovieListItem) {
    this.store.dispatch(new movieDbActions.RemoveMovie(item));
  }

  public removeTvShow(item:TvShowListItem) {
    this.store.dispatch(new movieDbActions.RemoveTvShow(item));
  }

  public showMovie(val:MovieListItem) {
    if (this.showMov === true) {
      this.showMov = false;
    } else {
      this.showMov = true;
    }
    this.showMovVal = val;
  }

  public showTvShow(val:TvShowListItem) {
    if (this.showShow === true) {
      this.showShow = false;
    } else {
      this.showShow= true;
    }
    this.showShowVal = val;
  }
  
  ngOnInit() {
    this.store.dispatch(new movieDbActions.GetMovieListFromLocalStorage());
    this.store.dispatch(new movieDbActions.GetTvShowListFromLocalStorage());
  }

  removeItem() {
    
  }

}
