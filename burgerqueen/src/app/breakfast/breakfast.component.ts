import { Component, OnInit } from '@angular/core';

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

  // Para obtener el valor seleccionado
  foodSelected: Food;
  foodArray: Food[] = [];

  onSelect(food: Food): void {
    this.foodSelected = food;
    this.foodArray.push(food);

    console.log(this.foodArray);
  }

  // clickedButton(value: any, price: number) {
  //   (this.item.order).push({ "value": value, "cost": price });
  //   this.item.total += price;
  // }

  constructor() {}

  ngOnInit() {}
}
