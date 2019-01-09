import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { apiUrl } from '../../services/api.config';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MovieListItem } from '../../store/models/movie-list-item';
import { TvShowListItem } from '../../store/models/tv-show-list-item';
import { SearchFormService } from '../../services/search-form.service';


@Component({
  selector: 'app-subscribe-item-window',
  templateUrl: './subscribe-item-window.component.html',
  styleUrls: ['./subscribe-item-window.component.css']
})
export class SubscribeItemWindowComponent implements OnInit {
  

  faTimes:object = faTimes;

  @Input () private itemDescribtion: MovieListItem | TvShowListItem;
  @Input () private isItemInLibrary: boolean;
  @Input () private showbutton: boolean;

  @Output () setItemToLocal = new EventEmitter<MovieListItem | TvShowListItem> ();

  public apiImgUrl: string = apiUrl.imageUrl;
  public buttonValue: string;
  

  public constructor(private location:Location,
                    private _searchFormService: SearchFormService) {}

  private goBack() {
    this.location.back();
  }

  public setToLocal() {
    this.setItemToLocal.emit(this.itemDescribtion);
  }

  ngOnInit() {
    if (this.isItemInLibrary == true) {
      this.buttonValue = "In Library";
    } else{this.buttonValue = "Add To Library"}
  }

}
