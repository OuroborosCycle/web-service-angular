import { Component, OnInit } from '@angular/core';
import orders_data from '../orders.json';

interface Orders {
  idOrder: Number;
  client: String;
  article: String;
  marque: String;
}

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: Orders[] = orders_data;

  isShown = false;

  toggleDisplay() {
    this.isShown = !this.isShown
  }

}
