import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AxiosDmitryService } from '../../services/axios-dmitry.service';
import {  map, catchError, switchMap } from 'rxjs/operators';
import { apiUrl, getMovieSearcLink } from '../../services/api.config';
import { of, from } from 'rxjs';
import * as filmListActions from '../actions/film-list.actions';
import { LocalStorageService } from '../../services/local-storage.service';
import { SearchService } from '../../services/search.service';

@Injectable()
export class FilmsListEffects {

  constructor(private actions$: Actions,
              private axiosDmitryService: AxiosDmitryService,
              private _localStorageService: LocalStorageService,
              private _searchService: SearchService) {}
                         
  private n: number = 1;

  getMovieFromLocal() {
    return this._localStorageService.getMovieListFromLocalStorage();
  }

  sort(items) {
    let isInLib:boolean[] = [];
    
    for (var i = 0; i < items.results.length; i++) {
        for (var y = 0; y < this.getMovieFromLocal().length; y++) {
            if (items.results[i].id === this.getMovieFromLocal()[y].id) {
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

  getFilmList () {
    this.n = 1;
    return this.axiosDmitryService.getRequest(apiUrl.movieUrl+String(this.n)).then(resp =>resp).catch(err => err);
  }

  loadNextPage () {
    this.n++;
    return this.axiosDmitryService.getRequest(apiUrl.movieUrl+String(this.n)).then(resp =>resp).catch(err => err);
  }

  @Effect ()
  public loadFilmsList$ = this.actions$.pipe(ofType(filmListActions.FilmListActionTypes.LoadFilmLists),
  switchMap(() => from(this.getFilmList ()).pipe(map((moviePageData)=> new filmListActions.LoadFilmListsSucsess(this.sort(moviePageData))),
  catchError(() => of(new filmListActions.LoadFilmListsError("Can't load((("))))))

  @Effect ()
  public loadNextPage$ = this.actions$.pipe(ofType(filmListActions.FilmListActionTypes.LoadNextPage),
  switchMap(() => from(this.loadNextPage ()).pipe(map((moviePageData)=> new filmListActions.LoadNextPageSucsess(this.sort(moviePageData))),
  catchError(() => of(new filmListActions.LoadNextPageError("Can't load((("))))))
  
  @Effect ()
  public searchResults$ = this.actions$.pipe(ofType(filmListActions.FilmListActionTypes.SearchForm),
  switchMap(() => from(this._searchService.getSearchItems()).pipe(map((searchData)=> new filmListActions.GetSearchDataSucsess(searchData)),
  catchError(()=> of(new filmListActions.LoadFilmListsError("Can't load((("))))))

  @Effect ()
  public nextSearchResults$ = this.actions$.pipe(ofType(filmListActions.FilmListActionTypes.GetNextSearchPage),
  switchMap(() => from(this._searchService.getNextSearchItems()).pipe(map((searchData)=> new filmListActions.GetNextSearchPageSucsess(searchData)),
  catchError(()=> of(new filmListActions.LoadFilmListsError("Can't load((("))))))
  
}

