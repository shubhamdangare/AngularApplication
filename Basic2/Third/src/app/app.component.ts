import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <form>
   <div>
        <label  for="lable1">Marvellous Infosystem</label>
        <input name ="Text1">
  </div>  
</form>   
  `,
  styles: [`
  input{

    color:blue;
  }
  `]
})
export class AppComponent {
  title = 'app';
}
