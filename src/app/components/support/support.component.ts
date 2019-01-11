import { Component, OnInit } from '@angular/core';
import { faUserCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  
  public faUserCircle:IconDefinition = faUserCircle;

  constructor() { }

  ngOnInit() {
  }

}
