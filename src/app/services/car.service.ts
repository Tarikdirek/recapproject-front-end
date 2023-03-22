import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:7205/api/Cars/getall'

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
   return  this.httpClient.get<CarResponseModel>(this.apiUrl)
  }
}

