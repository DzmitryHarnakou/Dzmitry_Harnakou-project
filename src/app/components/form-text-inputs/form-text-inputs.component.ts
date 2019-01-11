import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form-text-inputs',
  templateUrl: './form-text-inputs.component.html',
  styleUrls: ['./form-text-inputs.component.css']
})
export class FormTextInputsComponent implements OnInit {

  @Input () public titleIsValid:boolean;
  @Input () public overviewIsValid:boolean;
  @Output () public titleValue:EventEmitter<string> = new EventEmitter ();
  @Output () public overviewValue:EventEmitter<string> = new EventEmitter ();

  constructor() { }

  public getTitleVal(title:string):void {
    this.titleValue.emit(title);
  }

  public getOverviewVal(overview:string):void {
    this.overviewValue.emit(overview);
  }

  ngOnInit() {
  }

}