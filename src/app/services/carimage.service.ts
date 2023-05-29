import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl ="https://localhost:7205/api/";

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath= this.apiUrl +"CarImages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

}
