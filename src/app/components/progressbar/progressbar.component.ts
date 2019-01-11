import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progressBar',
  templateUrl: './progressBar.component.html',
  styleUrls: ['./progressBar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input () private label:string;
  @Output () public getCurValue: EventEmitter<number> = new EventEmitter ();
  public value:string;
  public color:string;

  constructor() { }

  public getValue(evt: MouseEvent):void{
    this.getCurValue.emit((evt.offsetX)/2);
  }

  public changeValue(evt: MouseEvent):number{
    this.value = String((evt.offsetX)/2)+'%';
    if (evt.offsetX<=100){
      this.color = 'rgb('+evt.offsetX*2.55+', 255, 0)';
    }
    if (evt.offsetX>100){
      this.color = 'rgb(255, '+(255-((evt.offsetX-100)*2.55))+', 0)';
    }
    return evt.offsetX/20;
  }

  ngOnInit() {
  }

}
