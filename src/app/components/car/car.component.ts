import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails:CarDetail[] = [];
  dataLoaded = false;
  baseUrl:string="https://localhost:7205/Uploads/Images/";  

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private carDetailService:CarDetailService ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars()
  { this.carDetailService.getCarDetails().subscribe(response=>{this.carDetails = response.data,this.dataLoaded = true;})
  }
  getCarsByBrandId(brandId:number)
  {
    this.carService.getCarsByBrandId(brandId).subscribe(reponse=>{this.carDetails = reponse.data
      this.dataLoaded = true})
  }
  getCarsByColorId(colorId:number)
  {
    this.carService.getCarsByColorId(colorId).subscribe(reponse=>{this.carDetails = reponse.data
      this.dataLoaded = true})
  }
 
}
