import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { apiUrl } from '../../services/api.config';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchFormService } from '../../services/search-form.service';

import * as fromRoot from '../../store/reducers/index'
import * as filmListActions from '../../store/actions/film-list.actions';
import * as  movieDbActions from '../../store/actions/movieDB.actions';
import { Observable } from 'rxjs';
import { MovieListItem } from 'src/app/store/models/movie-list-item';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

  private faSearch:any = faSearch;

  @Output() public getTargetDescription = new EventEmitter<MovieListItem>();

  public showAddMovie$:Observable<boolean> = this.store.select(s => s.movieDb.ShowAddMovie);

  public apiImgUrl: string = apiUrl.imageUrl;

  public isInLibrary$: Observable<boolean[]> = this.store.select(s => s.fimsList.isInLib);

  public filmsList$: Observable<any> = this.store.select(s => s.fimsList);

  public constructor(private store:Store<fromRoot.State>,
                    private _searchFormService:SearchFormService) {}

  private onScroll(){
    if (this._searchFormService.submited){
      this.store.dispatch(new filmListActions.LoadNextSearchPage());
    } else {
      this.store.dispatch(new filmListActions.LoadNextPage());
    }
  }

  private getItem(i: MovieListItem) {
    this._searchFormService.showForm = false;
    this.store.dispatch(new movieDbActions.SubscribeMovie(i));
  }

  ngOnInit() {
    this._searchFormService.submited = false;
    this.store.dispatch(new filmListActions.LoadFilmLists());
    this.store.dispatch(new movieDbActions.GetMovieListFromLocalStorage());
  }

  ngOnDestroy() {
    this._searchFormService.showForm = false;
    this.store.dispatch(new movieDbActions.HideAddMovie());
  }

}
