import { Component, OnInit } from '@angular/core';
import { BooksService } from "src/app/books.service";

@Component({
  selector: 'app-sub-component1',
  templateUrl: './sub-component1.component.html',
  styleUrls: ['./sub-component1.component.css']
})
export class SubComponent1Component implements OnInit {

  public Books=[];
  constructor(private Detail: BooksService) { }

  ngOnInit() {
    this.Books = this.Detail.BooksDetail();
  }

}
