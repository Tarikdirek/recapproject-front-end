import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ColorAdd } from '../models/color-add';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:7205/api/'

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "Colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
  addColor(color:ColorAdd):Observable<ResponseModel>{
    let newPath = this.apiUrl +"Colors/add"
    return this.httpClient.post<ResponseModel>(newPath,color)
  }
}
