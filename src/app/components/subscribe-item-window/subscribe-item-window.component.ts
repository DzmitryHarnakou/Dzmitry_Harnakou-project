import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { apiUrl } from '../../services/api.config';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';
import { MovieListItem } from '../../store/models/movie-list-item';
import { TvShowListItem } from '../../store/models/tv-show-list-item';

@Component({
  selector: 'app-subscribe-item-window',
  templateUrl: './subscribe-item-window.component.html',
  styleUrls: ['./subscribe-item-window.component.css']
})
export class SubscribeItemWindowComponent implements OnInit {
  
  faTimes:object = faTimes;
  faStar:object = faStar;

  @Input () itemDescribtion: MovieListItem | TvShowListItem;  

  @Output () setItemToLocal = new EventEmitter ();

  public apiImgUrl: string = apiUrl.imageUrl;

  public constructor() {}

  ngOnInit() {
  }

  setToLocal() {
    this.setItemToLocal.emit(this.itemDescribtion);
  }
}
