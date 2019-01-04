import { Injectable } from '@angular/core';
import { MovieListItem } from '../store/models/movie-list-item';
import { SearchFormService } from '../services/search-form.service';
import { AxiosDmitryService } from '../services/axios-dmitry.service';
import { getMovieSearcLink } from '../services/api.config'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private data: any;  
  private m:number;

  async getSearchItems() {
    this.m = 0;
    var resulArr:any = [];
    while (resulArr.length <= 20) {
     this.m++;
    var searchLink:string = getMovieSearcLink(this._searchFormService.adult, this._searchFormService.title, this._searchFormService.overview, this.m);
    var data:any = await this._axiosDmitryService.getRequest(searchLink).then(resp => resp).catch(err => console.log(err));
    this.data = data.total_pages;
    var results:any = data.results;
    var sortedByTitle:any = this.sortByTitle(results);
    var sortedByGenre:any = this.sortByGenre(sortedByTitle);
    var sortedByPopularity: any = this.sortByPopularity(sortedByGenre);
    var sortedByVoteAver: any = this.sortByVote(sortedByPopularity);
    resulArr = resulArr.concat(sortedByVoteAver);
    console.log(sortedByVoteAver, this.m);
     if (data.total_pages === this.m) {
         return resulArr;
         }
     }
    return resulArr;
   }

   async getNextSearchItems() {
    var resulArr:any = [];
    if (this.data === this.m) {
        console.log('end', this.m, this.data);
        this._searchFormService.submited = false;
        return resulArr;
    }
    while (resulArr.length <= 20) {
    this.m++;
    var searchLink:string = getMovieSearcLink(this._searchFormService.adult, this._searchFormService.title, this._searchFormService.overview, this.m);
    var data:any = await this._axiosDmitryService.getRequest(searchLink).then(resp => resp).catch(err => console.log(err));
    var results:any = data.results;
    var sortedByTitle:any = this.sortByTitle(results);
    var sortedByGenre:any = this.sortByGenre(sortedByTitle);
    var sortedByPopularity: any = this.sortByPopularity(sortedByGenre);
    var sortedByVoteAver: any = this.sortByVote(sortedByPopularity);
    resulArr = resulArr.concat(sortedByVoteAver);
    console.log('hello');
     if (data.total_pages === this.m) {
         return resulArr;
         }
     }
    return resulArr;
   }
 
   sortByTitle(results:any) {
       var sortByTitleArr:any = [];
       if (results.length == 0) {
           return results;
       }
     for (var l = 0; l < results.length; l++) {
         var result:boolean = results[l].original_title.toLocaleLowerCase().includes(this._searchFormService.title.toLocaleLowerCase());
         if (result == true) {
             sortByTitleArr.push(results[l]);
         }
     }
     return sortByTitleArr;
   }
 
   sortByGenre(sortedByTitle:any) {
       var genreFiltredArr:any = [];
       var genreArr: number[];
       var uniqueGenreArr: number[];
       if (this._searchFormService.genres_ids.length === 0){
           return sortedByTitle;
       }
     for (var i = 0; i < sortedByTitle.length; i++) {
         genreArr = [...sortedByTitle[i].genre_ids, ...this._searchFormService.genres_ids];
         uniqueGenreArr = genreArr.filter((v, i, a) => a.indexOf(v) === i);
         if (uniqueGenreArr.length === sortedByTitle[i].genre_ids.length) {
             genreFiltredArr.push(sortedByTitle[i]);
         }
     }
     return genreFiltredArr;
   }
 
   sortByPopularity(sortedByGenre:any) {
       if (this._searchFormService.popularity === null) {
           return sortedByGenre;
       } else {
       var sortedByPopularArr:any = [];
     for (var i = 0; i < sortedByGenre.length; i++) {
         if (sortedByGenre[i].popularity>this._searchFormService.popularity) {
             sortedByPopularArr.push(sortedByGenre[i]);
         }
     }
     return sortedByPopularArr;}
   }
 
   sortByVote(sortedByPopularity:any) {
       if (this._searchFormService.vote_average === null) {
           return sortedByPopularity;
       } else {
     var sortedByVoteArr:any = [];
     for (var i = 0; i < sortedByPopularity.length; i++) {
         if (sortedByPopularity[i].vote_average>this._searchFormService.vote_average){
             sortedByVoteArr.push(sortedByPopularity[i]);
         }
     }
     return sortedByVoteArr;}
   }
  constructor(private _searchFormService: SearchFormService,
              private _axiosDmitryService: AxiosDmitryService) { }
}