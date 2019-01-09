import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input () private label:string;
  @Output () public getCurValue = new EventEmitter<number> ();
  private value:string;
  private color:string;

  constructor() { }

  ngOnInit() {
  }

  private getValue(evt: MouseEvent){
    this.getCurValue.emit((evt.offsetX)/2);
  }

  private changeValue(evt: MouseEvent){
    this.value = String((evt.offsetX)/2)+'%';
    if (evt.offsetX<=100){
      this.color = 'rgb('+evt.offsetX*2.55+', 255, 0)';
    }
    if (evt.offsetX>100){
      this.color = 'rgb(255, '+(255-((evt.offsetX-100)*2.55))+', 0)';
    }
    return evt.offsetX/20;
  }
}
