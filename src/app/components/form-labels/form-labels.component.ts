import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { labels } from '../../services/labels.config';
import { Labels } from '../../store/models/labels';


@Component({
  selector: 'app-form-labels',
  templateUrl: './form-labels.component.html',
  styleUrls: ['./form-labels.component.css']
})
export class FormLabelsComponent implements OnInit {

  @Output () public genreId: EventEmitter<number> = new EventEmitter ();

  constructor() { }

  public labels:Labels[] = labels;

  public getGenreId(genre:number):void {
    this.genreId.emit(genre);
  }

  ngOnInit() {
  }

}
