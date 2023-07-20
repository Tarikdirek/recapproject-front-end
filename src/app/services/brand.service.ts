import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { BrandAdd } from '../models/brand-add';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:7205/api/';

  constructor(private httpClient:HttpClient) { }
 
  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "Brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);

  }
  addBrand(brand:BrandAdd):Observable<ResponseModel>{
    let newPath = this.apiUrl + "Brands/add"
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }
}
