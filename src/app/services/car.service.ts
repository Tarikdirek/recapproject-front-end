import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:7205/api/'

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "Cars/getall"
   return  this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Cars/getcardetailsbybrandid?id=" + brandId
    return  this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
   }
   getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"Cars/getcardetailsbycolorid?id=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
   }
   getCarsDetail():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
   }
}

