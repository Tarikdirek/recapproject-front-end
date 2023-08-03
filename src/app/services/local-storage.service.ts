import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  removeToken(){
    let removeToken =localStorage.removeItem("token")
    return removeToken
  }

  setToken(response:any){
    let setToken = localStorage.setItem("token",response)
    return setToken;
  }
}
