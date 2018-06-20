import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <h3>
    {{SubHeader}}
  </h3>
 </div>

  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystem';
  SubHeader = "Educating for better tomorrow";
}
