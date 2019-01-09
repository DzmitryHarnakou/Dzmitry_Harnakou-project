import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AxiosDmitryService } from '../../services/axios-dmitry.service';
import {  map, catchError, switchMap } from 'rxjs/operators';
import { apiUrl, getMovieSearcLink } from '../../services/api.config';
import { of, from } from 'rxjs';
import * as filmListActions from '../actions/film-list.actions';
import { LocalStorageService } from '../../services/local-storage.service';
import { MovieData } from '../models/movie-data'

@Injectable()
export class FilmsListEffects {

  constructor(private actions$: Actions,
              private axiosDmitryService: AxiosDmitryService,
              private _localStorageService: LocalStorageService) {}
                         
  private n: number = 1;
  private formState:any;

  private getMovieFromLocal() {
    return this._localStorageService.getMovieListFromLocalStorage();
  }

  private sort(items:any) {
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

  private getFilmList () {
    this.n = 1;
    return this.axiosDmitryService.getRequest(apiUrl.movieUrl+String(this.n)).then(resp =>resp).catch(err => err);
  }

  private loadNextPage () {
    this.n++;
    return this.axiosDmitryService.getRequest(apiUrl.movieUrl+String(this.n)).then(resp =>resp).catch(err => err);
  }

  private getSearchResults(action) {
      this.formState = action.payload;
      this.n = 1;
      var link:string = getMovieSearcLink(this.formState.adult, this.formState.title, this.formState.overview, this.n);
      var data = this.axiosDmitryService.getRequest(link).then(resp => resp).catch(err => err);
      return data;
  }

  private getNextSearchResults() {
    this.n++;
    var link:string = getMovieSearcLink(this.formState.adult, this.formState.title, this.formState.overview, this.n);
    var data = this.axiosDmitryService.getRequest(link).then(resp => resp).catch(err => err);
    return data;
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
  public getSearchResults$ = this.actions$.pipe(ofType(filmListActions.FilmListActionTypes.SearchFilms),
  switchMap((payload) => from(this.getSearchResults(payload)).pipe(map((searchData)=> new filmListActions.SearchFilmsSucsess(searchData)),
  catchError(() => of(new filmListActions.SearchFilmsEror("Can't load((("))))))

  @Effect ()
  public getNextSearchResults$ = this.actions$.pipe(ofType(filmListActions.FilmListActionTypes.LoadNextSearchPage),
  switchMap(() => from(this.getNextSearchResults()).pipe(map((searchData)=> new filmListActions.LoadNextSearchPageSucsess(searchData)),
  catchError(() => of(new filmListActions.LoadNextSearchPageEror("Can't load((("))))))
}

