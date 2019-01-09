import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faUpload} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file-loader',
  templateUrl: './file-loader.component.html',
  styleUrls: ['./file-loader.component.css']
})
export class FileLoaderComponent implements OnInit {

  @Output () emitFiles = new EventEmitter<File[]> ();

  private faUpload:any = faUpload;
  
  private widthNum:number = 1;
  private width:string;
  private urls = new Array<string>();
  private showScroll:boolean = false;

  constructor( ) { }
 
  private detectFiles(event:any) {
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
