import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = [];
  currentColor:Color;
  colorFilterText="";
  constructor(private colorService:ColorService, private activateRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{this.colors = response.data})
  }
  
  setCurrentColor(color:Color){
    this.currentColor = color
  }
  getCurrentColorClass(color:Color){
    if (this.currentColor==color) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }

  }
}
