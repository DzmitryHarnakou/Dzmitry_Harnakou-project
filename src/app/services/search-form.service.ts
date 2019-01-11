import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  public title:string = '';
  public overview:string =  '';
  public genres_ids: number[] = [];
  public adult:boolean = false;
  public popularity:number = null;
  public vote_average:number = null;
  public remember_inputs:boolean = false;

  public showForm:boolean = false;
  public displayForm:string = "flex";
  public submitted: boolean = false; 

  constructor() { }

  public getGenreId(val:number):void {
      for (var i = 0; i < this.genres_ids.length; i++) {
        if (this.genres_ids[i] === val) {
          this.genres_ids.splice(i, 1);
          return;
        }
      }
    this.genres_ids.push(val);
  }

  public setDefault ():void {
    this.adult = false;
    this.genres_ids = [];
    this.overview = "";
    this.popularity = null;
    this.title = "";
    this.vote_average = null;
    this.remember_inputs = false;
  }

  public toggle ():void {
    if (window.location.pathname === "/movie" || window.location.pathname === "/tvShows"){
      if (this.remember_inputs === false){
        if(this.showForm) {
          this.showForm = false;
        } else {
          this.showForm = true;
        }
      } else {
        if (this.displayForm === "flex") {
          this.displayForm = "none";
        } else {
          this.displayForm = "flex";
        } 
      }
    }
  }
}
