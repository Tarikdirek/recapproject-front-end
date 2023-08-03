import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../models/loginForm';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenForm } from '../models/tokenForm';
import { JwtHelperService } from "@auth0/angular-jwt";
import { RegisterModel } from '../models/registerModel';
import { UserPasswordModel } from '../models/userPasswordModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  apiUrl ='https://localhost:7205/api'

  constructor(private httpClient:HttpClient,private jwtHelperService:JwtHelperService) { }

  login(loginForm:LoginForm){
    let newPath = this.apiUrl + "/Auth/login"
    return this.httpClient.post<SingleResponseModel<TokenForm>>(newPath,loginForm)
  }

  passwordUpdate(userPasswordModel:UserPasswordModel){
    let newPath = this.apiUrl + "/Auth/passwordupdate";
    return this.httpClient.post<ResponseModel>(newPath,userPasswordModel);
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }else{
      return false;
    }
  }

  get getDecodeToken(){
    let token =localStorage.getItem("token");
    return this.jwtHelperService.decodeToken(token);
  }

  get getCurrentUserName() {
    let decodedToken = this.getDecodeToken;
    let userNameString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('/name')
    )[0];
    let userName: string = decodedToken[userNameString];
    return userName;
  }

  get getCurrentUserEmail() {
    let decodedToken = this.getDecodeToken;
    let userNameString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('/email')
    )[0];
    let userName: string = decodedToken[userNameString];
    return userName;
  }

  get getCurrentUserRole(){
    let decodedToken = this.getDecodeToken;
    let userRoleString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('/role')
    )[0];
    let userRole:string =decodedToken[userRoleString]; 
    if(userRole.startsWith('a'||'c')){
      return true
    }else{
      return false
    }
  }

  register(register:RegisterModel){
    let newPath =this.apiUrl + "/Auth/register"
    return this.httpClient.post<SingleResponseModel<TokenForm>>(newPath,register)
  }

  get getCurrentUserId() {
    let decodedToken = this.getDecodeToken;
    let userIdString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('/nameidentifier')
    )[0];
    let userId: number = decodedToken[userIdString];
    return userId;
  }

}
