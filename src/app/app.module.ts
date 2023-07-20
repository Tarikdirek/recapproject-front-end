import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

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
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { RentaladdComponent } from './components/rentaladd/rentaladd.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';

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
    BrandFilterPipe,
    ColorFilterPipe,
    RentaladdComponent,
    PaymentComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      closeButton:true,
      progressBar:true,
      progressAnimation:"increasing"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
