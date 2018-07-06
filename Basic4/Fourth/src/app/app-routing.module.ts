import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OsComponent } from "src/app/os/os.component";
import { DsComponent } from "src/app/ds/ds.component";
import { PLComponent } from "src/app/pl/pl.component";

const routes: Routes = [
   {path : 'os', component:OsComponent},
   {path : 'pl', component:PLComponent},
   {path : 'ds', component:DsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
