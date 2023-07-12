import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentaladdComponent } from './components/rentaladd/rentaladd.component';

const routes: Routes = [
 {path:"",component:CarComponent},
 {path:"cars",component:CarComponent},
 {path:"cars/cardetails/:carId",component:CardetailComponent},
 {path:"cars/brand/:brandId",component:CarComponent},
 {path:"cars/color/:colorId",component:CarComponent},
 {path:"cars/payment/:carId",component:PaymentComponent},
 {path:"rentals/add", component:RentaladdComponent},
 {path:"payment/add", component:PaymentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
