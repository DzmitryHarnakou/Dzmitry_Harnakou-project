import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { appRoutes } from '../../services/routings';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index';
import * as  movieDbActions from '../../store/actions/movieDB.actions';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {

  private items:any
  private routerLink:Route[] = appRoutes;

  constructor(private _navigationService: NavigationService,
              private store:Store<fromRoot.State>) {}

  private showAddMovie$:Observable<boolean> = this.store.select(s => s.movieDb.ShowAddMovie);

  private showMovie() {
    this.store.dispatch(new movieDbActions.ToggleAddMovie());
  }

  ngOnInit() {
    this.items = this._navigationService.headerNavItems;
  }
}
