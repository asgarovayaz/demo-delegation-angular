import { Component, Input, OnInit } from '@angular/core';

import { ColumnMode } from '@swimlane/ngx-datatable';
import { IProduct } from '@delegation/data/api.service';
import productItems from '@delegation/data/products';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html'
})
export class BestSellersComponent implements OnInit {
  @Input() title = 'dashboards.best-sellers';

  data: IProduct[] = productItems.slice(0, 6);
  rows = productItems.slice(0, 10);
  columns = [
    { prop: 'title' },
    { name: 'Sales' },
    { name: 'Stock' },
    { name: 'Category' }
  ];

  columnMode = ColumnMode.flex;
  constructor() { }

  ngOnInit() {
  }

}
