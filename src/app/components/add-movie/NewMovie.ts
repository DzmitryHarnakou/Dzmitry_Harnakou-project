import { MovieListItem } from '../../store/models/movie-list-item';

export class NewMovie implements MovieListItem {

    adult:boolean;
    backdrop_path: string = null;
    genre_ids: number[];
    id: number = null;
    original_language: string = null;
    original_title: string;
    overview: string;
    popularity:number = null; 
    poster_path:string = null;
    release_date:Date = null;
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