import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faBook, faTimes } from '@fortawesome/free-solid-svg-icons';
import { apiUrl } from '../../services/api.config';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  private faBook: any= faBook;
  private faTimes: any = faTimes;

  @Input () private imgUrl:string;
  @Input () private isInLibrary:boolean;
  @Input () private itemTitle:string;
  
  constructor() { }

  ngOnInit() {    
    if (~this.imgUrl.indexOf("null")) {
      this.imgUrl = apiUrl.xTraImg;
    } 
  }

}
