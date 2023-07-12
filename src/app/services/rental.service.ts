import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalAdd } from '../models/rental-add';
import { ResponseAddModel } from '../models/responseAddModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl ='https://localhost:7205/api'
  
  constructor(private httpClient:HttpClient) { 

  }
  getRentals(carId: number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl +'/Rentals/getrentaldetails?id=' + carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)

  }
  IsCarAvailable(carId:number):Observable<ListResponseModel<ResponseAddModel>>{
    let newPath = this.apiUrl +'/Rentals/iscaravailable?carId=' + carId
    return this.httpClient.get<ListResponseModel<ResponseAddModel>>(newPath)
  }

  add(rentaladd: RentalAdd){
    return this.httpClient.post(this.apiUrl+"/rentals/add",rentaladd)
  }
}
