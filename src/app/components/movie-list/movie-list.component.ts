import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { apiUrl } from '../../services/api.config';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchFormService } from '../../services/search-form.service';

import * as fromRoot from '../../store/reducers/index'
import * as filmListActions from '../../store/actions/film-list.actions';
import * as  movieDbActions from '../../store/actions/movieDB.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  faSearch = faSearch;

  @Output() getTargetDescription = new EventEmitter();

  public apiImgUrl: string = apiUrl.imageUrl;

  public isInLibrary$ = this.store.select(s => s.fimsList.isInLib);

  public filmsList$ = this.store.select(s => s.fimsList);

  public constructor(private store:Store<fromRoot.State>,
                    private _searchFormService:SearchFormService) {}

  onScroll(){
    if (this._searchFormService.submited === false) {
      this.store.dispatch(new filmListActions.LoadNextPage());
    } else {
      this.store.dispatch(new filmListActions.GetNextSearchPage());
    }
    
  }

  ngOnInit() {
    this.store.dispatch(new filmListActions.LoadFilmLists());
    this.store.dispatch(new movieDbActions.GetMovieListFromLocalStorage());
  }

  getItem(i) {
    this.store.dispatch(new movieDbActions.SubscribeMovie(i));
  }

}
