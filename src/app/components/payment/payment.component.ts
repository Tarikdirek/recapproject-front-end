import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  cardSaveForm:FormGroup
  savedData:any;
  

  baseUrl:string ='https://localhost:7205/Uploads/Images/';
  
  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder,
    private authService:AuthService)
  {

  }
  
  ngOnInit(): void {
    this.creaCardSaveForm()
    this.authCheck()
    
  }

  authCheck(){
    if (this.authService.isAuthenticated()) {
      return true
    }else{
      return false
    }
    
  }
  
  creaCardSaveForm(){
    this.cardSaveForm = this.formBuilder.group({
      cardHolder:["",Validators.required],
      creditCardNumber:["",Validators.required],
      expirationDate:["",Validators.required],
      securityCode:["",Validators.required],
    })
  }
  
  
  rentACar(){
    this.toastrService.success("Car rented successfully")
  }

  onSubmit(): void {
    if (this.cardSaveForm.valid) {
     localStorage.setItem("userData",JSON.stringify(this.cardSaveForm.value))
    }
   
  }


  loadSavedData():void{
    const data = localStorage.getItem("userData");
    this.savedData= data?JSON.parse(data) : null;
    if (this.savedData) {
      this.cardSaveForm.patchValue({
        cardHolder:this.savedData.cardHolder,
        creditCardNumber:this.savedData.creditCardNumber,
        expirationDate:this.savedData.expirationDate,
        securityCode:this.savedData.securityCode
      })
    }
  }


  clearSavedData():void{
    localStorage.removeItem("userData");
    this.savedData = null;
  }


}
