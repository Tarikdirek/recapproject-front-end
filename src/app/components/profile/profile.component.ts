import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserPasswordModel } from 'src/app/models/userPasswordModel';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user:User;
  dataLoaded =false;
  profileForm:FormGroup;
  passwordForm:FormGroup;

  constructor(private userService:UserService,
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService) {

    
  }
  
  ngOnInit(): void {

    this.getUserById();
    this.createProfileForm();
    this.createPasswordForm();
  }

  getUserById(){
    this.userService.getUserById(this.authService.getCurrentUserId).subscribe(response =>{
      this.user = response.data
      this.dataLoaded = true;
    })
  }

  createProfileForm(){
    this.profileForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
    })
  }

  createPasswordForm(){
    this.passwordForm = this.formBuilder.group({
      oldPassword: ["",Validators.required],
      newPassword:["",Validators.required],
      repeatNewPassword:["",Validators.required]
    })
  }

  updateUserNames(){
    if (this.profileForm.valid) {
      let userModel:User = Object.assign({},this.profileForm.value)
      userModel.id=this.user.id;
      userModel.email = this.user.email;
      this.userService.updateUserNames(userModel).subscribe(response =>{
        this.toastrService.info(response.message,"Profile Updated.");
        setTimeout(()=>{
          window.location.reload();
        },1000)
      },responseError =>{
        console.log(responseError);
        this.toastrService.error(responseError.error,"Caution!")
      })

    }else{
      this.toastrService.error("Please fill the blanks","Caution!");
    }
  }

  updatePassword(){
    if (this.passwordForm.valid) {
      let userModel:UserPasswordModel = Object.assign({},this.passwordForm.value)
      userModel.id = this.user.id
      this.authService.passwordUpdate(userModel).subscribe(response=>{
        this.toastrService.info(response.message,"Info");
      },responseError=>{
        this.toastrService.error(responseError.error,"Caution!")
      })
    }else{
      this.toastrService.error("Fill the all blanks","Caution!")
    }
  }

  getToken(){
    let token = this.authService.getDecodeToken
    console.log(token);
  }

}
