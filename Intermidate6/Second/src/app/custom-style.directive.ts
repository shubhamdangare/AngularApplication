import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private ele:ElementRef) { 
ele.nativeElement.style.background='yellow';
ele.nativeElement.style.fontWeight ='bold';
  
  }
}
