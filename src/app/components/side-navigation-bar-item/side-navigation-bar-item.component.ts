import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-navigation-bar-item',
  templateUrl: './side-navigation-bar-item.component.html',
  styleUrls: ['./side-navigation-bar-item.component.css']
})
export class SideNavigationBarItemComponent implements OnInit {
  
  @Input () private navIcon:any;
  @Input () private showText:boolean;
  @Input () private navItemText:string;

  constructor() { }

  ngOnInit() {
  }

}
