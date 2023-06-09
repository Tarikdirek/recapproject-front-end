import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';

const routes: Routes = [
 {path:"",component:CarComponent},
 {path:"cars",component:CarComponent},
 {path:"cars/cardetails/:carId",component:CardetailComponent},
 {path:"cars/brand/:brandId",component:CarComponent},
 {path:"cars/color/:colorId",component:CarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
