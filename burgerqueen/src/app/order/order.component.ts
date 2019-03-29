import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() sumOrderBreakfast: number;
  @Output() deleteRest = new EventEmitter();
  // visible = true;
  // selectable = true;
  removable = true;

  remove(clientOrder: Food): void {
    const index = this.clientOrders.indexOf(clientOrder);
    if (index >= 0) {
      this.takeYourZeroPrice(this.clientOrders[index].price);
      this.sumOrderBreakfast -= this.clientOrders[index].price;
      this.clientOrders.splice(index, 1);
    }
  }

  takeYourZeroPrice(value: number) {
    this.deleteRest.emit({
      value
    });
    console.log('Hola > ' + value);
  }
  constructor() {}

  ngOnInit() {}
}
