import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl= 'https://localhost:7205/api/';

  constructor(private httpClient:HttpClient) { }

  getUserById(userId:number):Observable<SingleResponseModel<User>>{
    let newPath =this.apiUrl + "Users/getbyid?id=" + userId
   return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }

  updateUserNames(user:User){
    let newPath = this.apiUrl + "Users/updateusernames"
    return this.httpClient.post<ResponseModel>(newPath,user)
  }

}
