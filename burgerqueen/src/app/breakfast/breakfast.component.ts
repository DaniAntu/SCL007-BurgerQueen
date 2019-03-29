import { Component, OnInit } from '@angular/core';

import { FOODS } from './breakfastlist';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  foods = FOODS;

  constructor() {}

  ngOnInit() {}
}
