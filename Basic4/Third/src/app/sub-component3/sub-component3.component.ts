import { Component, OnInit } from '@angular/core';
import { BooksService } from "src/app/books.service";

@Component({
  selector: 'app-sub-component3',
  templateUrl: './sub-component3.component.html',
  styleUrls: ['./sub-component3.component.css']
})
export class SubComponent3Component implements OnInit {
public Books=[];
  constructor(private Detail: BooksService) { }

  ngOnInit() {
    this.Books = this.Detail.BooksDetail();
  }

}
