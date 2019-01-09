import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AxiosDmitryService } from '../../services/axios-dmitry.service';
import {  map, catchError, switchMap } from 'rxjs/operators';
import { apiUrl, getTvShowSearchLink } from '../../services/api.config';
import { of, from } from 'rxjs';
import * as tvShowListAction from '../actions/tv-shows-list.actions';
import { LocalStorageService } from '../../services/local-storage.service';
import { TvShowListItem } from '../models/tv-show-list-item';

@Injectable()
export class TvShowListEffects {

  constructor(private actions$: Actions,
              private axiosDmitryService: AxiosDmitryService,
              private _localStorageService: LocalStorageService) {}

  private n: number = 1;
  private formState:any;

  private getTvShowFromLocal() {
    return this._localStorageService.getTvShowListFromLocalStorage();
  }

  private sort(items:any) {
    let isInLib:boolean[] = [];
    
    for (var i = 0; i < items.results.length; i++) {
        for (var y = 0; y < this.getTvShowFromLocal().length; y++) {
            if (items.results[i].id === this.getTvShowFromLocal()[y].id) {
                isInLib[i] = true;
            } else {
                if (isInLib[i] == true) {
                    continue;
                }
                isInLib[i] = false;
            }
        }

    }
    return {
        isInLib: isInLib,
        items: items,
    }
  }


  private getShowList () {
    this.n = 1;
    return this.axiosDmitryService.getRequest(apiUrl.showUrl+String(this.n)).then(resp =>resp).catch(err => err);
  }

  private loadNextPage () {
    this.n++;
    return this.axiosDmitryService.getRequest(apiUrl.showUrl+String(this.n)).then(resp =>resp).catch(err => err);
  }

  private getSearchResults(action:any) {
    this.formState = action.payload;
    this.n = 1;
    var link:string = getTvShowSearchLink(this.formState.title, this.formState.overview, this.n);
    var data = this.axiosDmitryService.getRequest(link).then(resp => resp).catch(err => err);
    return data;
}

private getNextSearchResults() {
  this.n++;
  var link:string = getTvShowSearchLink(this.formState.title, this.formState.overview, this.n);
  var data = this.axiosDmitryService.getRequest(link).then(resp => resp).catch(err => err);
  return data;
}


  @Effect ()
  public loadTvShowList$ = this.actions$.pipe(ofType(tvShowListAction.TvShowListActionTypes.LoadTvShowList),
  switchMap(() => from(this.getShowList ()).pipe(map((tvShowList)=> new tvShowListAction.LoadTvShowListSucsess(this.sort(tvShowList))),
  catchError(() => of(new tvShowListAction.LoadTvShowListError("Can't load((("))))))

  @Effect ()
  public loadNextPage$ = this.actions$.pipe(ofType(tvShowListAction.TvShowListActionTypes.LoadNextPage),
  switchMap(() => from(this.loadNextPage ()).pipe(map((tvShowList)=> new tvShowListAction.LoadNextPageSucsess(this.sort(tvShowList))),
  catchError(() => of(new tvShowListAction.LoadNextPageError("Can't load((("))))))

  @Effect ()
  public getSearchResults$ = this.actions$.pipe(ofType(tvShowListAction.TvShowListActionTypes.SearchTvShow),
  switchMap((payload) => from(this.getSearchResults(payload)).pipe(map((searchData)=> new tvShowListAction.SearchTvShowSucsess(searchData)),
  catchError(() => of(new tvShowListAction.SearchTvShowEror("Can't load((("))))))

  @Effect ()
  public getNextSearchResults$ = this.actions$.pipe(ofType(tvShowListAction.TvShowListActionTypes.LoadNextSearchPage),
  switchMap(() => from(this.getNextSearchResults()).pipe(map((searchData)=> new tvShowListAction.LoadNextSearchPageSucsess(searchData)),
  catchError(() => of(new tvShowListAction.LoadNextSearchPageEror("Can't load((("))))))
}

