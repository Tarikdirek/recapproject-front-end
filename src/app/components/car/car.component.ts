import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  brandFilter: number = 0;
  colorFilter :number =0;
  colors: Color[] = [];
  currentBrand: Brand;
  carDetails: CarDetail[] = [];
  dataLoaded = false;
  baseUrl: string = 'https://localhost:7205/Uploads/Images/';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carDetailService: CarDetailService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
        this.getBrands();
        this.getColors();
      }
    });
  }

  getCars() {
    this.carDetailService.getCarDetails().subscribe((response) => {
      (this.carDetails = response.data), (this.dataLoaded = true);
    });
  }
  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((reponse) => {
      this.carDetails = reponse.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((reponse) => {
      this.carDetails = reponse.data;
      this.dataLoaded = true;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getSelectedBrand(brandId:number){
    if(this.brandFilter==brandId)
    return true;
    else return false;
  }
}
