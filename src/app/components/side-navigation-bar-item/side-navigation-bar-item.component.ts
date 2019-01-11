import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-navigation-bar-item',
  templateUrl: './side-navigation-bar-item.component.html',
  styleUrls: ['./side-navigation-bar-item.component.css']
})
export class SideNavigationBarItemComponent implements OnInit {
  
  @Input () public navIcon:IconDefinition;
  @Input () public showText:boolean;
  @Input () public navItemText:string;

  constructor() { }

  ngOnInit() {
  }

}
