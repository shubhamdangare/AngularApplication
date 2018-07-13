import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name;
  pass;
  login(Name,Pass){
    this.name = Name;
    this.pass = Pass;
    console.log(this.name);  
  }
}
