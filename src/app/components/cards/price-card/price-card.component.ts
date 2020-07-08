import { Component, Input, OnInit } from '@angular/core';

import { IPriceItem } from '@delegation/data/prices';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
})
export class PriceCardComponent implements OnInit {

  @Input() price: IPriceItem;

  constructor() { }

  ngOnInit() {
  }

}
