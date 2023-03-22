import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails:CarDetail[] =[];
  dataLoaded = false;

  constructor(private carDetailService:CarDetailService){}

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{this.carDetails = response.data,this.dataLoaded = true;})
  }

}
