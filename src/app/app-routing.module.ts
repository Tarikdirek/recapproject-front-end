import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentaladdComponent } from './components/rentaladd/rentaladd.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
 {path:"",component:CarComponent},
 {path:"cars",component:CarComponent},
 {path:"cars/cardetails/:carId",component:CardetailComponent},
 {path:"cars/brand/:brandId",component:CarComponent},
 {path:"cars/color/:colorId",component:CarComponent},
 {path:"cars/payment/:carId",component:PaymentComponent},
 {path:"rentals/add", component:RentaladdComponent},
 {path:"payment/add", component:PaymentComponent},
 {path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
 {path:"brands/add", component:BrandAddComponent},
 {path:"colors/add", component:ColorAddComponent},
 {path:"cardetails/brand/:brandId", component:CardetailComponent},
 {path:"login",component:LoginComponent},
 {path:"register",component:RegisterComponent},
 {path:"profile",component:ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
