import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { UserComponent } from './components/user/user.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    CustomerComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    CarimageComponent,
    UserComponent,
    CardetailComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
