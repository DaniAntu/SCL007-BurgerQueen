import { Component, OnInit } from '@angular/core';

import { LUNCHS, HAMBURGUERS } from './lunchlist';
import { Lunch, Hamburger } from '../models/lunchModel';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  hamburguers = HAMBURGUERS;
  lunchs = LUNCHS;

  lunchArray: Lunch[] = [];
  meat: Lunch;
  totalSum = 0;

  onSelect(lunch: Lunch): void {
    this.lunchArray.push(lunch);
    // this.totalSum += food.price;
  }
  constructor() {}

  ngOnInit() {
    console.log(this.lunchs);
  }
}
