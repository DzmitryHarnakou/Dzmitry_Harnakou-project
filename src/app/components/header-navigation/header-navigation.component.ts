import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {

  private items:any

  constructor(private _navigationService: NavigationService) {}

  ngOnInit() {
    this.items = this._navigationService.headerNavItems;
  }

}
