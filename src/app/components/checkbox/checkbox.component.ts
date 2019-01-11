import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit{
  
  @Input () public label:string;
  @Input () public genre_id:number;
  @Output () public getGenreId: EventEmitter<number> = new EventEmitter ();
  @Output () public boolValue: EventEmitter<boolean> = new EventEmitter ();

  public value: boolean = false; 
  public faCheck:IconDefinition = faCheck;
  
  constructor() { }

  public emitId(): void {
      this.getGenreId.emit(this.genre_id);
  }

  public emitBoolVal(value:boolean):void {
    if (value) {
      this.boolValue.emit(false);
    } else {
      this.boolValue.emit(true);
    }
  }
  
  ngOnInit() {
  }

}
