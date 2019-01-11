import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faUpload, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HTMLInputEvent } from '../../store/models/html-input'

@Component({
  selector: 'app-file-loader',
  templateUrl: './file-loader.component.html',
  styleUrls: ['./file-loader.component.css']
})
export class FileLoaderComponent implements OnInit {

  @Output () public emitFiles: EventEmitter<FileList> = new EventEmitter ();

  public faUpload:IconDefinition = faUpload;
  
  private widthNum:number = 1;
  public width:string;
  public urls:string[] = new Array<string>();
  public showScroll:boolean = false;

  constructor( ) { }
 
  public detectFiles(event:HTMLInputEvent):void {
    this.widthNum = 1;    
    this.urls = [];
    let files:any = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
    this.emitFiles.emit(files);
    var intervalID:any = setInterval(() => {if (this.widthNum < 100){this.widthNum++;
      this.width = String(this.widthNum)+"%"} else {clearInterval(intervalID)};
  }, 50);
 }
  
  ngOnInit() {
  }

}
