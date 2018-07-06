import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubComponent1Component } from './sub-component1/sub-component1.component';
import { SubComponent2Component } from './sub-component2/sub-component2.component';
import { SubComponent3Component } from './sub-component3/sub-component3.component';
import { BooksService } from "src/app/books.service";

@NgModule({
  declarations: [
    AppComponent,
    SubComponent1Component,
    SubComponent2Component,
    SubComponent3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
