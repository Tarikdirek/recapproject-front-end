import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarAdd } from 'src/app/models/car-add';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;
  modelOfCar:CarAdd;
  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
   private toastrService:ToastrService) {
    
  }

  ngOnInit(): void {
    this.createCarAddForm()
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      colorId:["",Validators.required],
      brandId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    })
  }

  addCar(){
    if (this.carAddForm.valid) {
      this.modelOfCar = Object.assign({},this.carAddForm.value)
      this.carService.addCar(this.modelOfCar).subscribe(response => {
        console.log(response)
        this.toastrService.success("Car Added","Successful!")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Caution")
          }       
        } 
        
      })
    }
  }
}
