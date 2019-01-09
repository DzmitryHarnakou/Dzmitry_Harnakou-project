import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { labels } from '../../services/labels.config';


@Component({
  selector: 'app-form-labels',
  templateUrl: './form-labels.component.html',
  styleUrls: ['./form-labels.component.css']
})
export class FormLabelsComponent implements OnInit {

  @Output () public genreId: any = new EventEmitter<number> ();

  constructor() { }

  public labels:object[] = labels;

  private getGenreId(genre:number) {
    this.genreId.emit(genre);
  }

  ngOnInit() {
  }

}
