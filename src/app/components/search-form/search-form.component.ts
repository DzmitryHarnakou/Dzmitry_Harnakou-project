import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchFormService } from '../../services/search-form.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit, OnDestroy {

  private adult:boolean = false;

  

  constructor(private _searchFormService: SearchFormService) { }

  private labels = this._searchFormService.genres;

  private submit() {
    this._searchFormService.submit();
  }

  private adultValue(val:boolean) {
    this._searchFormService.adult = val;
  }

  private popularity(popVal: number) {
    this._searchFormService.popularity = popVal;
  }

  private voteAverage(voteVal: number) {
    this._searchFormService.vote_average = voteVal/10;
  }

  private rememberImputs(remVal: boolean) {
    this._searchFormService.remember_inputs = remVal;
  }

  ngOnDestroy() {
    this._searchFormService.setDefault ();
  }

  ngOnInit() {
  }

}
