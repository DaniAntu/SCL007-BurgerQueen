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
  @Output() info = new EventEmitter();
  // visible = true;
  // selectable = true;
  removable = true;

  remove(clientOrder: Food): void {
    const index = this.clientOrders.indexOf(clientOrder);
    if (index >= 0) {
      console.log(this.clientOrders[index].price);
      this.sumOrderBreakfast -= this.clientOrders[index].price;
      this.clientOrders.splice(index, 1);
    }
    if (this.sumOrderBreakfast === 0) {
      this.takeYourZeroPrice(this.sumOrderBreakfast);
    }
  }

  takeYourZeroPrice(value) {
    this.info.emit({
      value
    });
    console.log('If i 0');
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
