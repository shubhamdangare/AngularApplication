import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  City = [
    {"name":"new york"},
    {"name":"sydney"},
    {"name":"san diago"},
    {"name":"london"},
    {"name":"paris"},
    {"name":"greek"},
    
  ]
}
