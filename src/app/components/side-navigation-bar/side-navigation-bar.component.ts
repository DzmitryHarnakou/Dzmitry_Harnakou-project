import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { appRoutes } from '../../services/routings'
import { Route } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index';
import * as  movieDbActions from '../../store/actions/movieDB.actions';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.css']
})
export class SideNavigationBarComponent implements OnInit {

  public iconBars: IconDefinition = this._navigationService.faBars;
  public iconClose: IconDefinition = this._navigationService.faWindowClose;
  public collapseBar:boolean = true;
  public routerLink:Route[] = appRoutes;

  constructor(private _navigationService: NavigationService,
    private store:Store<fromRoot.State>) {}

  public isCollapsed():void {
    this.collapseBar = this._navigationService.isCollapse();
  }

  public showAddMovie():void {
    this.store.dispatch(new movieDbActions.ToggleAddMovie());
  }

  ngOnInit() {
  }

}
