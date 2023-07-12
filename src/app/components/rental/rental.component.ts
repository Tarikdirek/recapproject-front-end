import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[] = [];
  constructor(private rentalService:RentalService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=> {
      if (params['carId']) {
        this.getRentals(params['carId']);
      }
    })
  }

  getRentals(carId:number){
    this.rentalService.getRentals(carId).subscribe(response => {this.rentals = response.data})
  }

}
