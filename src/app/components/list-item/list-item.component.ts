import { Component, OnInit, Input } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { apiUrl } from '../../services/api.config';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  faBook = faBook;
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
