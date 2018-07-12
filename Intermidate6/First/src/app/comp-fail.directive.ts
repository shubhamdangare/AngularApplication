import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFail]'
})
export class CompFailDirective {

  constructor(private ref:ElementRef) { }


  @HostListener('mouseenter') onmouseenter()
  {

    this.ref.nativeElement.style.color="Red";

  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.ref.nativeElement.style.color="Black";

  }

}
