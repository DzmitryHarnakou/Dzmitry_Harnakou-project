import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index';
import { MovieListItem } from '../../store/models/movie-list-item';
import * as movieDbActions from 'src/app/store/actions/movieDB.actions';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  public filmsList:MovieListItem[];

  public filmsList$ = this.store.select(s=>s.movieDb.localMovieList)

  public constructor(private store:Store<fromRoot.State>) {}
    
  ngOnInit() {
    this.store.dispatch(new movieDbActions.GetMovieListFromLocalStorage())
  }

}
