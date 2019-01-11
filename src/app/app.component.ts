import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public constructor(private store:Store<fromRoot.State>) {}

  public showAddMovie$:Observable<boolean> = this.store.select(s => s.movieDb.ShowAddMovie);

  ngOnInit() {
  }
}
