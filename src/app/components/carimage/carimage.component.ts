import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {
  
  carImages:CarImage[] = [];
  baseUrl="https://localhost:7205/Uploads/Images/"
  currentImage:CarImage;
  constructor(private carImageService:CarimageService){}

  ngOnInit(): void {
    this.getCarImages();
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response => {this.carImages=response.data})
  }


}
