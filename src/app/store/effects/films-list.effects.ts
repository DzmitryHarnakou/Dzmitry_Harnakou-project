import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AxiosDmitryService } from '../../services/axios-dmitry.service';
import {  map, catchError, switchMap } from 'rxjs/operators';
import { apiUrl } from '../../services/api.config';
import { of, from } from 'rxjs';
import * as filmListActions from '../actions/film-list.actions'

@Injectable()
export class FilmsListEffects {

  constructor(private actions$: Actions,
              private axiosDmitryService: AxiosDmitryService) {}

  private n: number = 1;

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
  switchMap(() => from(this.getFilmList ()).pipe(map((movieList)=> new filmListActions.LoadFilmListsSucsess(movieList)),
  catchError(() => of(new filmListActions.LoadFilmListsError("Can't load((("))))))

  @Effect ()
  public loadNextPage$ = this.actions$.pipe(ofType(filmListActions.FilmListActionTypes.LoadNextPage),
  switchMap(() => from(this.loadNextPage ()).pipe(map((movieList:object)=> new filmListActions.LoadNextPageSucsess(movieList)),
  catchError(() => of(new filmListActions.LoadNextPageError("Can't load((("))))))
}

