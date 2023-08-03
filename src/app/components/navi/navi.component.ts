import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  
  
  dataFromDB:string;
  user:User;
  dataLoaded = false;
  constructor(private authService:AuthService,private localStorageService:LocalStorageService,
    private userService:UserService,private router:Router) {

    }

  ngOnInit(): void {
    this.getUserById()
    this.getCurrentUserId()
  }


  authCheck(){
    if (this.authService.isAuthenticated()) {
      return true
    }else{
      return false
    }
    
  }
  
  getCurrentUserId(){
    return this.authService.getCurrentUserId
  }

  getUserById(){
    this.userService.getUserById(this.authService.getCurrentUserId).subscribe(response =>{
       this.user = response.data
      this.dataLoaded= true
    })
  }
  

  logOut(){
    this.localStorageService.removeToken();
    setTimeout(()=>{
      window.location.reload();
    },1000)
    this.router.navigate([""]);
  }

  getTokenInformation(){
    console.log(this.authService.getCurrentUserRole)
  }

}
