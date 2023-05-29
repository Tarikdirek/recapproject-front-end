import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  
  brands:Brand[] = [];
  currentBrand:Brand;
  constructor(private branService:BrandService, private activateRoute:ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.branService.getBrands().subscribe(response=>{this.brands = response.data})
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand
  }

  getCurrentBrandClass(brand:Brand){
    if (this.currentBrand==brand ) {

      return "list-group-item active"
    }else{
      return "list-group-item"
    }
    
  }
  getAllCarClass(){
    if (this.brands) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  setCurrentAllCarClass(){
    this.brands 
  }
}
