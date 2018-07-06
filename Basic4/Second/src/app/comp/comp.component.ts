import { Component, OnInit } from '@angular/core';
import { CompanService } from "src/app/compan.service";

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  public Company =[];
  constructor(private CompService:CompanService) { }

  fun(){
    this.CompService.CompanyNames()
    .subscribe((data)=>this.Company=data);
  }
  ngOnInit() {
    
  }

}
