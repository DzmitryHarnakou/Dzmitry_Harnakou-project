import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { apiUrl } from '../../services/api.config';
import { SearchFormService } from '../../services/search-form.service';

import * as fromRoot from '../../store/reducers/index'
import * as tvShowListActions from '../../store/actions/tv-shows-list.actions';
import * as movieDbActions from '../../store/actions/movieDB.actions';
import { Observable } from 'rxjs';
import { TvShowListItem } from 'src/app/store/models/tv-show-list-item';


@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.css']
})
export class TvShowsListComponent implements OnInit, OnDestroy {

  public apiImgUrl: string = apiUrl.imageUrl;
  public isInLibrary$:Observable<boolean[]> = this.store.select(s => s.tvShowList.isInLib);
  public tvShowList$:Observable<any> = this.store.select((s => s.tvShowList));
  public showAddMovie$ = this.store.select(s => s.movieDb.ShowAddMovie);

  constructor(private store:Store<fromRoot.State>,
              private _searchFormService:SearchFormService) {}

  public onScroll():void{
    if (this._searchFormService.submitted){
      this.store.dispatch(new tvShowListActions.LoadNextSearchPage());
    } else {
      this.store.dispatch(new tvShowListActions.LoadNextPage());
    }
  }

  public getItem(i:TvShowListItem):void {
    this._searchFormService.showForm = false;
    this.store.dispatch(new movieDbActions.SubscribeTvShow(i));
  }

  ngOnInit() {
    this._searchFormService.submitted = false;
    this.store.dispatch(new tvShowListActions.LoadTvShowList());
    this.store.dispatch(new movieDbActions.GetTvShowListFromLocalStorage());
  }

  ngOnDestroy() {
    this._searchFormService.showForm = false;
  }

}