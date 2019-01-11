import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { SearchFormService } from '../services/search-form.service'; 

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  constructor(private _elementRef : ElementRef,
              private _searchFormService:SearchFormService) {
  }
 
  @Output()
  public clickOutside:EventEmitter<MouseEvent> = new EventEmitter();
  private count:number = 0;

  @HostListener('document:click', ['$event.target'])
    public onClick(targetElement:EventTarget) {
      if (this._searchFormService.displayForm === "none") {
        this.count = 0;
      } else {
      this.count++;
      if (this.count >= 2) {
      const clickedInside:boolean = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
          this.clickOutside.emit(null);
          this.count = 0;
        }
      }
    }
  }
}
