import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../models/breakfast';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // Con el input, le indico que el valor viene desde fuera del componente
  name: string;
  @Input() clientOrders: Food[] = [];
  // foods: Food[];

  // clickedButton(value: any, price: number) {
  //   (this.item.order).push({ "value": value, "cost": price });
  //   this.item.total += price;
  // }

  // this.item.total += price;
  constructor() {}

  ngOnInit() {
    console.log('Hola > ' + this.clientOrders);
  }
}
