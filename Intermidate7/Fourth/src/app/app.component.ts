import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  pages: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'karuanchi',pages: 700, price: 550},
  {name: 'cracking code ',pages: 700, price: 550},
  {name: 'robert',pages: 700, price: 550}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayedColumns: string[] = ['name', 'pages', 'price'];
  dataSource = ELEMENT_DATA;
}
