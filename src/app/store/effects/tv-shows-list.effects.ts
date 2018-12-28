import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AxiosDmitryService } from '../../services/axios-dmitry.service';
import {  map, catchError, switchMap } from 'rxjs/operators';
import { apiUrl } from '../../services/api.config';
import { of, from } from 'rxjs';
import * as tvShowListAction from '../actions/tv-shows-list.actions'

@Injectable()
export class TvShowListEffects {

  constructor(private actions$: Actions,
              private axiosDmitryService: AxiosDmitryService) {}

  private n: number = 1;

  getShowList () {
    this.n = 1;
    return this.axiosDmitryService.getRequest(apiUrl.showUrl+String(this.n)).then(resp =>resp).catch(err => err);
  }

  loadNextPage () {
    this.n++;
    return this.axiosDmitryService.getRequest(apiUrl.showUrl+String(this.n)).then(resp =>resp).catch(err => err);
  }

  @Effect ()
  public loadTvShowList$ = this.actions$.pipe(ofType(tvShowListAction.TvShowListActionTypes.LoadTvShowList),
  switchMap(() => from(this.getShowList ()).pipe(map((tvShowList)=> new tvShowListAction.LoadTvShowListSucsess(tvShowList)),
  catchError(() => of(new tvShowListAction.LoadTvShowListError("Can't load((("))))))

  @Effect ()
  public loadNextPage$ = this.actions$.pipe(ofType(tvShowListAction.TvShowListActionTypes.LoadNextPage),
  switchMap(() => from(this.loadNextPage ()).pipe(map((tvShowList:object)=> new tvShowListAction.LoadNextPageSucsess(tvShowList)),
  catchError(() => of(new tvShowListAction.LoadNextPageError("Can't load((("))))))
}

