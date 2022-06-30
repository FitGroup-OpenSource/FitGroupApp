import { Component, OnInit } from '@angular/core';
import {FoodsService} from "../../services/foods.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  plans:any;
  constructor(private foodsService: FoodsService) {
    this.getAllNutritionalPlans();
  }

  ngOnInit(): void {
  }
  getAllNutritionalPlans(){
    this.foodsService.getAll().subscribe(response=>{
      this.plans=response;
    });
  }

}
