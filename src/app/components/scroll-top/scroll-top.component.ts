import { Component, OnInit } from '@angular/core';
import { faArrowUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import * as fromRoot from '../../store/reducers/index'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {

  public faArrowUp:IconDefinition = faArrowUp;
  public showAddMovie$: Observable<boolean> = this.store.select(s => s.movieDb.ShowAddMovie);

  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
  }

}
