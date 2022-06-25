import { Component, OnInit } from '@angular/core';
import {NutritionalPlansService} from "../schedule/services/nutritional-plans.service";
import {FoodsService} from "../schedule/services/foods.service";

@Component({
  selector: 'app-food-preference',
  templateUrl: './food-preference.component.html',
  styleUrls: ['./food-preference.component.css']
})
export class FoodPreferenceComponent implements OnInit {

  constructor(private nutritionalPlansService: NutritionalPlansService, private foodsService: FoodsService) {
    this.accountId=1;
  }
  accountId: number;
  ngOnInit(): void {

  }

}
