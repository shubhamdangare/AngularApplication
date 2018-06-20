import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  Str:string = "Marvellous infosystem";


  Press(){

    this.Str = "Button clicked";

  }
}
