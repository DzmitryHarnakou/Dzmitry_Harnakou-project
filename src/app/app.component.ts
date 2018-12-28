import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public constructor(private store:Store<fromRoot.State>) {}
}
