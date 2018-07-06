import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyInterface } from './Company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanService {

  constructor(private http:HttpClient) { }
  private _url:string = "/assets/Data/Compname.json";
 
CompanyNames():Observable<CompanyInterface[]>
{
  return this.http.get<CompanyInterface[]>(this._url);
}
}
