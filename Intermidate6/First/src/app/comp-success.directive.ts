import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private ref:ElementRef) { }


  @HostListener('mouseenter') onmouseenter()
  {

    this.ref.nativeElement.style.color="Green";

  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.ref.nativeElement.style.color="Black";

  }
  
}
