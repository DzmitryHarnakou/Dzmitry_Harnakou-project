import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { appRoutes } from '../../services/routings'
import { Route } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index';
import * as  movieDbActions from '../../store/actions/movieDB.actions';

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.css']
})
export class SideNavigationBarComponent implements OnInit {

  private colapseBar:boolean = true;
  private routerLink:Route[] = appRoutes;

  constructor(private _navigationServise: NavigationService,
    private store:Store<fromRoot.State>) {}

  isColapsed() {
    this.colapseBar = this._navigationServise.isColapse();
  }

  showAddMovie() {
    this.store.dispatch(new movieDbActions.ToggleAddMovie());
  }

  ngOnInit() {
  }

}
