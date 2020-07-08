import { Component, OnInit } from '@angular/core';
import orderData, { IOrder } from '@delegation/data/orders';

@Component({
  selector: 'app-project-detail-orders',
  templateUrl: './project-detail-orders.component.html'
})
export class ProjectDetailOrdersComponent implements OnInit {
  orders: IOrder[] = orderData;

  constructor() { }

  ngOnInit(): void {
  }

}
