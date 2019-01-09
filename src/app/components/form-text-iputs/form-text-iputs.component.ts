import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form-text-iputs',
  templateUrl: './form-text-iputs.component.html',
  styleUrls: ['./form-text-iputs.component.css']
})
export class FormTextIputsComponent implements OnInit {

  @Input () private titleIsValid:any;
  @Input () private overviewIsValid:any;
  @Output () private titleValue:any = new EventEmitter<string> ();
  @Output () private overviewValue:any = new EventEmitter<string> ();

  constructor() { }

  private getTitleVal(title:string) {
    this.titleValue.emit(title);
  }

  private getOverviewVal(overview:string) {
    this.overviewValue.emit(overview);
  }

  ngOnInit() {
  }

}
