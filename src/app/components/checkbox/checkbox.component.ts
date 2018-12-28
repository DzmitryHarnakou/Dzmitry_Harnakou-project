import { Component, OnInit, Input, Output } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input () label:string;
  @Output () value:boolean;

  faCheck = faCheck;

  constructor() { }

  ngOnInit() {
  }

}
