import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { apiUrl } from '../../services/api.config';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MovieListItem } from '../../store/models/movie-list-item';
import { TvShowListItem } from '../../store/models/tv-show-list-item';

@Component({
  selector: 'app-subscribe-item-window',
  templateUrl: './subscribe-item-window.component.html',
  styleUrls: ['./subscribe-item-window.component.css']
})
export class SubscribeItemWindowComponent implements OnInit {
  

  faTimes:IconDefinition = faTimes;

  @Input () public itemDescription: MovieListItem | TvShowListItem;
  @Input () public isItemInLibrary: boolean;
  @Input () public showButton: boolean;
  @Output () public setItemToLocal: EventEmitter<MovieListItem | TvShowListItem> = new EventEmitter ();

  public apiImgUrl: string = apiUrl.imageUrl;
  public buttonValue: string;
  public voteWidth: string;
  public imgUrl: string;

  constructor(private location:Location) {}

  public goBack():void {
    this.location.back();
  }

  public setToLocal():void {
    this.setItemToLocal.emit(this.itemDescription);
  }

  ngOnInit() {
    if (this.isItemInLibrary == true) {
      this.buttonValue = "In Library";
    } else{this.buttonValue = "Add To Library"}
    this.voteWidth = this.itemDescription.vote_average*10 +'%';
    this.imgUrl = 'url('+this.apiImgUrl+this.itemDescription.backdrop_path+')'
    if (String(this.itemDescription.backdrop_path) === "null") {
      this.imgUrl = apiUrl.xTraImg;
    }
  }

}
