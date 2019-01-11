import { Injectable } from '@angular/core';
import { MovieListItem } from '../store/models/movie-list-item';
import { TvShowListItem } from '../store/models/tv-show-list-item';

@Injectable({
  providedIn: 'root'
})


export class LocalStorageService {

  public movieList:MovieListItem[] = [];
  public tvShowList: TvShowListItem[] = [];
  public updatedMovieList:MovieListItem[];
  public updatedTvShowList:TvShowListItem[];

  public getMovieListFromLocalStorage():MovieListItem[] {
    this.movieList = JSON.parse(localStorage.getItem('movieList'));
    if (this.movieList === null) {
      return [];
    } else {
      return this.movieList;
    }
  }

  public setMovieToLocalStorage(movieItem:MovieListItem):MovieListItem[] {
    this.updatedMovieList = [...this.getMovieListFromLocalStorage(), movieItem]
    localStorage.setItem('movieList', JSON.stringify(this.updatedMovieList));
    return this.updatedMovieList;
  }

  public removeMovieFromLocalStorage(movieItem:MovieListItem):void {
    this.updatedMovieList = this.getMovieListFromLocalStorage().filter(movItem => JSON.stringify(movItem) != JSON.stringify(movieItem));
    localStorage.setItem('movieList', JSON.stringify(this.updatedMovieList));
  }

  public getTvShowListFromLocalStorage():TvShowListItem[] {
    this.tvShowList = JSON.parse(localStorage.getItem('tvShowList'));
    if (this.tvShowList === null) {
      return [];
    } else {
      return this.tvShowList;
    }
  }

  public setTvShowToLocalStorage(tvShowItem:TvShowListItem):TvShowListItem[] {
    this.updatedTvShowList = [...this.getTvShowListFromLocalStorage(), tvShowItem];
    localStorage.setItem('tvShowList', JSON.stringify(this.updatedTvShowList));
    return this.updatedTvShowList;
  }

  public removeTvShowFromLocalStorage(tvShowItem:TvShowListItem):void {
    this.updatedTvShowList = this.getTvShowListFromLocalStorage().filter(showItem => JSON.stringify(showItem) != JSON.stringify(tvShowItem));
    localStorage.setItem('tvShowList', JSON.stringify(this.updatedTvShowList));
  }

  public addNewFilesToLocal(action:any):void {
    localStorage.setItem(action.payload.title, action.file)
  }
  
  constructor() { }
}
