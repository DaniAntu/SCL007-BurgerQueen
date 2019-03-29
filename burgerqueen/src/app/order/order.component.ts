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
  @Input() sumOrder: number;

  // visible = true;
  // selectable = true;
  removable = true;

  remove(clientOrder: Food): void {
    const index = this.clientOrders.indexOf(clientOrder);

    if (index >= 0) {
      this.clientOrders.splice(index, 1);
    }
  }

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
