import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit{

  private value: boolean = false; 
  private faCheck:any = faCheck;

  constructor() { }
  @Input () private label:string;
  @Input () private genre_id:number;
  @Output () public getGenreId = new EventEmitter<number> ();
  @Output () public boolValue: any = new EventEmitter<boolean> ();

  private emitId() {
      this.getGenreId.emit(this.genre_id);
  }

  private emitBoolVal(value:boolean) {
    if (value) {
      this.boolValue.emit(false);
    } else {
      this.boolValue.emit(true);
    }
  }
  
  ngOnInit() {
  }

}
