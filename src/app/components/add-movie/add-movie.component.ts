import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as  movieDbActions from '../../store/actions/movieDB.actions';
import * as fromRoot from '../../store/reducers/index';
import { NewMovie } from './NewMovie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  public adult: boolean = false;
  public title: string;
  public overview: string;
  public genreIds: number[] = [];
  public files: FileList;
  public showMenu: boolean = false;

  constructor(private store:Store<fromRoot.State>) { }

  public getFiles(files: FileList): void {
    this.files = files;
  }

  public adultValue(adult: boolean): void {
    this.adult = adult;
  }

  public titleValue(title: string):void {
    this.title = title
  }

  public getGenreId(genreId: number):void {
    for (var i = 0; i < this.genreIds.length; i++) {
      if (this.genreIds[i] === genreId) {
        this.genreIds.splice(i, 1);
        return;
      }
    }
  this.genreIds.push(genreId);
  }

  public overviewValue(overview: string):void {
    this.overview = overview;
  }

  public submit():void {
    if (this.genreIds.length && this.title && this.overview) {
      this.store.dispatch(new movieDbActions.AddMovie(new NewMovie(this.adult, this.genreIds, this.title, this.overview, this.title),this.files));
      this.store.dispatch(new movieDbActions.HideAddMovie());
    } else {
      this.showMenu = true;
    }
    if (this.showMenu) {
      setTimeout(() => this.showMenu = false, 1000);
    }
  }

  public onCancel():void {
    this.store.dispatch(new movieDbActions.HideAddMovie());
  }

  ngOnInit() {
  }

}