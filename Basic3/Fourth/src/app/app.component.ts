import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str:string = 'Hello everyone';
  len:number;
  str2:string
   Len(){

    this.len = this.str.length;

   }
  Uper(){
    this.str2 =this.str.toUpperCase();
  }
}
