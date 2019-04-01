import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FOODS } from './breakfastlist';
import { Food } from '../models/breakfast';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  // Elemento food, lo muestra en pantalla
  foods = FOODS;

  // Obtiene seleccion y guarda en array
  foodArray: Food[] = [];
  totalSum = 0;

  onSelect(food: Food): void {
    this.foodArray.push(food);
    this.totalSum += food.price;
  }

  iRecieveMyZero(value: number) {
    // this.totalSum = 0;
    console.log('lo que recibo ' + value);
  }

  constructor() {}

  ngOnInit() {}
}
