import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index';
import * as movieDbActions from 'src/app/store/actions/movieDB.actions';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  public tvShowList$ = this.store.select(s=>s.movieDb.localTvShowList);

  public filmsList$ = this.store.select(s=>s.movieDb.localMovieList);

  public constructor(private store:Store<fromRoot.State>) {}
    
  ngOnInit() {
    this.store.dispatch(new movieDbActions.GetMovieListFromLocalStorage());
    this.store.dispatch(new movieDbActions.GetTvShowListFromLocalStorage());
  }

}
