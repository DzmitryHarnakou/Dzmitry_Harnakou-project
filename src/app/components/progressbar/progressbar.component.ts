import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input () label:string;
  value:string;
  color:string;

  constructor() { }

  ngOnInit() {
  }

  changeValue(evt: MouseEvent){
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
