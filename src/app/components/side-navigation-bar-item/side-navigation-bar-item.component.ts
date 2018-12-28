import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-navigation-bar-item',
  templateUrl: './side-navigation-bar-item.component.html',
  styleUrls: ['./side-navigation-bar-item.component.css']
})
export class SideNavigationBarItemComponent implements OnInit {
  
  @Input () navIcon:any;
  @Input () showText:boolean;
  @Input () navItemText:string;

  constructor() { }

  ngOnInit() {
  }

}
