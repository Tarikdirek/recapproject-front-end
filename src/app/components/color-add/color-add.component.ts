import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorAdd } from 'src/app/models/color-add';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;
  modelOfColor:ColorAdd;
  
  constructor(private colorService:ColorService,
    private formsBuilder:FormBuilder,
    private toastrService:ToastrService) {
    
  }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.colorAddForm = this.formsBuilder.group({
      colorName:["",Validators.required]
    })
  }

  addColor(){
    if (this.colorAddForm.valid) {
      this.modelOfColor = Object.assign({},this.colorAddForm.value)
      this.colorService.addColor(this.modelOfColor).subscribe(response => {
        console.log(response)
        this.toastrService.success("Color added","Successful!")
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
