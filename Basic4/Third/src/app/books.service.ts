import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  BooksDetail()
{
  return [
    {"Name":"Aaa", "Price":90000, "Author":"shubham","Pages":1200},

    {"Name":"bbb", "Price":90000, "Author":"shubham","Pages":1200},
    {"Name":"ccc", "Price":90000, "Author":"shubham","Pages":1200},
    {"Name":"ddd", "Price":90000, "Author":"shubham","Pages":1200},
        ];
}
}
