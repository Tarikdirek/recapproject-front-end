import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { RentalAdd } from 'src/app/models/rental-add';
import { ResponseAddModel } from 'src/app/models/responseAddModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rentaladd',
  templateUrl: './rentaladd.component.html',
  styleUrls: ['./rentaladd.component.css']
})
export class RentaladdComponent implements OnInit {
  
  rentalAddForm:FormGroup;
  minDate = new Date();
  carDetail:CarDetail[];
  modelOfRental:RentalAdd;
  response:boolean;

  constructor(private formBuilder:FormBuilder,
    private rentalService:RentalService,
    private router:Router,
    private toastrService:ToastrService,
    private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetail(params['carId'])
        
      }
    })
    this.createRentalAddForm();
  }
  
  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      carId:["",Validators.required],
      customerId:["",Validators.required],
      rentDate:["",Validators.required],
      returnDate:["",Validators.required],
    })
  }
  IsCarAvailable(){
    if (this.rentalAddForm.valid) {
      this.rentalService.IsCarAvailable(this.carDetail[0].carId)
      .subscribe(response => {
        this.toastrService.success(response.message,"Successful")
        this.sendData()
        this.router.navigate(["/cars/payment",this.carDetail[0].carId])
      })
      
    }
  }
  sendData(){
      
      if (this.rentalAddForm.valid) { 
       this.modelOfRental=Object.assign({},this.rentalAddForm.value)
        this.rentalService.add(this.modelOfRental).subscribe(data=>{
         console.log(data)
        this.toastrService.success("Redirecting for payment")
        this.router.navigate(["/payment/add"])
      })
    }
    else{
      this.toastrService.error("This car is not available for rent", "Caution!")
    }
    
    
    
  }
  getCarDetail(carId:number){
    this.carDetailService.getCarDetailByCarId(carId).subscribe((response) => {
      
      this.carDetail = response.data} 
    )
  }

   consoleLog(){
    this.rentalService.IsCarAvailable(this.carDetail[0].carId).subscribe((response) => {
     this.response = response.success
     console.log((this.response))
     if (!(this.response)) {
        this.toastrService.error("Car is not available for rent", "Caution!")
     } else{ 
      this.toastrService.success("Car is available for rent")
    }
     
    }) 
   
  }
  

}
