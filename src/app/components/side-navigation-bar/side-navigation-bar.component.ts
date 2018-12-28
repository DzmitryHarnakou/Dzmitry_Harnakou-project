import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { appRoutes } from '../../services/routings'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.css']
})
export class SideNavigationBarComponent implements OnInit {

  colapseBar:boolean = true;
  routerLink:object = appRoutes;

  constructor(private _navigationServise: NavigationService) {}

  isColapsed() {
    this.colapseBar = this._navigationServise.isColapse();
  }

  ngOnInit() {
  }

}
