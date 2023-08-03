import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  email:string;
  
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,private router:Router) {
    
  }
  
  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
     let modelOfLogin = Object.assign({},this.loginForm.value)


      this.authService.login(modelOfLogin).subscribe(response=> {
        console.log(response.data.token)
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
        setTimeout(()=>{
          window.location.reload();
        },1000)
        this.router.navigate([""]);
      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
  }

  onSubmit(){
    console.log("Gönderilen veri "+this.email);
    
  }
}
