import { Component, OnInit } from '@angular/core';

import { FOODS } from './breakfastlist';
import { Food } from '../models/breakfast';
import { totalmem } from 'os';

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

  iRecieveMyZero(value) {
    console.log('Yo recibo mi cero' + value);
    this.totalSum = 0;
  }

  constructor() {}

  ngOnInit() {}
}
