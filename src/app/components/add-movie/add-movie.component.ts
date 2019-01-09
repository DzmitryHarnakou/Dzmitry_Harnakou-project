import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as  movieDbActions from '../../store/actions/movieDB.actions';
import * as fromRoot from '../../store/reducers/index'

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  private adult: boolean = false;
  private title: string;
  private overview: string;
  private genreIds: number[] = [];
  private files:any;
  private showMenu: boolean = false;

  constructor(private store:Store<fromRoot.State>) { }

  private getFiles(files: any) {
    this.files = files;
  }

  private adultValue(adult: boolean) {
    this.adult = adult;
  }

  private titleValue(title: string) {
    this.title = title
  }

  private getGenreId(genreId: number) {
    for (var i = 0; i < this.genreIds.length; i++) {
      if (this.genreIds[i] === genreId) {
        this.genreIds.splice(i, 1);
        return;
      }
    }
  this.genreIds.push(genreId);
  }

  private overviewValue(overview: string) {
    this.overview = overview;
  }

  private submit() {
    if (this.genreIds.length && this.title && this.overview) {
      this.store.dispatch(new movieDbActions.AddMovie(new NewMovie(this.adult, this.genreIds, this.title, this.overview, this.title),this.files));
      this.store.dispatch(new movieDbActions.HideAddMovie());
    } else {
      this.showMenu = true;
    }
    if (this.showMenu) {
      setTimeout(() => this.showMenu = false, 600);
    }
  }

  private onCancel() {
    this.store.dispatch(new movieDbActions.HideAddMovie());
  }

  ngOnInit() {
  }

}

class NewMovie {

  adult:boolean;
  backdrop_path: string = null;
  genre_ids: number[];
  id: number = null;
  original_language: string = null;
  original_title: string;
  overview: string;
  popularity:number = null; 
  poster_path:string = null;
  release_date:number = null;
  title:string;
  video:boolean = false;
  vote_average:number = null;
  vote_count:number = null;

  constructor(adult:boolean, 
              genre_ids:number[], 
              original_title:string, 
              overview:string, 
              title:string) {

    this.adult = adult;
    this.genre_ids = genre_ids;
    this.original_title = original_title;
    this.overview = overview;
    this.title = title;

  }
}