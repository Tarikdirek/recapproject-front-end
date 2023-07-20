import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  dataLoaded = false;
  currentCarDetail: CarDetail;
  rentalFilter: number = 0;
  baseUrl: string = 'https://localhost:7205/Uploads/Images/';

  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailCarId(params['carId']);
      } else if(params['brandId']){
        this.getCarDetailCarId(params['brandId'])
      }
       else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.carDetailService.getCarDetails().subscribe((response) => {
      (this.carDetails = response.data), (this.dataLoaded = true);
    });
  }
  setCurrentCarDetail(carDetail: CarDetail) {
    this.currentCarDetail = carDetail;
  }
  getCurrentCarDetailClass(carDetail: CarDetail) {
    if (carDetail == this.currentCarDetail) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  getCarDetailCarId(carId: number) {
    this.carDetailService.getCarDetailByCarId(carId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
 

}
