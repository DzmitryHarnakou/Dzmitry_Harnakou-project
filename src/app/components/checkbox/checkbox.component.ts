import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit{

  private value:boolean = false; 
  @Input () label:string;
  @Input () genre_id:number;
  @Output () getGenreId = new EventEmitter ();
  @Output () boolValue = new EventEmitter (); 

  emitId() {
      this.getGenreId.emit(this.genre_id);
  }

  emitVal(val: boolean) {
    if (val === false){
      val = true;
    } else {
      val = false;
    }
    this.boolValue.emit(val);
  }
  
  faCheck = faCheck;

  constructor() { }

  ngOnInit() {
  }

}
