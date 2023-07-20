import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandAdd } from 'src/app/models/brand-add';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  
  brandAddForm:FormGroup;
  modalOfBrand:BrandAdd;

  constructor(private brandService:BrandService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService) {
    
  }

  ngOnInit(): void {
    this.createBrandAddForm()
  }
  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  addBrand(){
    if (this.brandAddForm.valid) {
      this.modalOfBrand = Object.assign({},this.brandAddForm.value)
      this.brandService.addBrand(this.modalOfBrand).subscribe(response =>{
        console.log(response)
        this.toastrService.success("Brand added","Successful")
      },responseError=>{
        if (responseError.error.Errors.length>0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Invalid")
          }
          
        }
      })
    }
  }

}
