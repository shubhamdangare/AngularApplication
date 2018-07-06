import { Component, OnInit } from '@angular/core';
import { BooksService } from "src/app/books.service";

@Component({
  selector: 'app-sub-component2',
  templateUrl: './sub-component2.component.html',
  styleUrls: ['./sub-component2.component.css']
})
export class SubComponent2Component implements OnInit {

  public Books=[];
  constructor(private Detail: BooksService) { }

  ngOnInit() {
    this.Books = this.Detail.BooksDetail();
  }

}
