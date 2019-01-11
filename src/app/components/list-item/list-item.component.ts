import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faBook, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { apiUrl } from '../../services/api.config';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  public faBook: IconDefinition = faBook;
  public faTimes: IconDefinition = faTimes;
  public img: string;

  @Input () public imgUrl:string;
  @Input () public isInLibrary:boolean;
  @Input () public itemTitle:string;
  @Input () public fontSize: string;

  constructor() { }

  ngOnInit() {    
    this.img = "url(" +apiUrl.imageUrl+this.imgUrl+")";
    if (String(this.imgUrl) === "null") {
      this.img = apiUrl.xTraImg;
    } 
  }

}
