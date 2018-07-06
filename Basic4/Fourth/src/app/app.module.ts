import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsComponent } from './os/os.component';
import { PLComponent } from './pl/pl.component';
import { DsComponent } from './ds/ds.component';

@NgModule({
  declarations: [
    AppComponent,
    OsComponent,
    PLComponent,
    DsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
