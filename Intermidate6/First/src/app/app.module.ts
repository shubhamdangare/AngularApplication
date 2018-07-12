import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompSuccessDirective } from './comp-success.directive';
import { CompFailDirective } from './comp-fail.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompSuccessDirective,
    CompFailDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
