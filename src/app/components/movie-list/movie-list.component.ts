import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { apiUrl } from '../../services/api.config';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
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

  public faSearch:IconDefinition = faSearch;

  @Output() public getTargetDescription: EventEmitter<MovieListItem> = new EventEmitter ();

  public showAddMovie$:Observable<boolean> = this.store.select(s => s.movieDb.ShowAddMovie);

  public apiImgUrl: string = apiUrl.imageUrl;

  public isInLibrary$: Observable<boolean[]> = this.store.select(s => s.filmsList.isInLib);

  public filmsList$: Observable<any> = this.store.select(s => s.filmsList);

  constructor(private store:Store<fromRoot.State>,
                    private _searchFormService:SearchFormService) {}

  public onScroll():void{
    if (this._searchFormService.submitted){
      this.store.dispatch(new filmListActions.LoadNextSearchPage());
    } else {
      this.store.dispatch(new filmListActions.LoadNextPage());
    }
  }

  public getItem(i: MovieListItem):void {
    this._searchFormService.showForm = false;
    this.store.dispatch(new movieDbActions.SubscribeMovie(i));
  }

  ngOnInit() {
    this._searchFormService.submitted = false;
    this.store.dispatch(new filmListActions.LoadFilmLists());
    this.store.dispatch(new movieDbActions.GetMovieListFromLocalStorage());
  }

  ngOnDestroy() {
    this._searchFormService.showForm = false;
    this.store.dispatch(new movieDbActions.HideAddMovie());
  }

}
