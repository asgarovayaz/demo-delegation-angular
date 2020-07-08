import { Component, OnInit } from '@angular/core';
import ruleData, { IRule } from '@delegation/services/fake-data/rules';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html'
})
export class RulesComponent implements OnInit {

  data: IRule[] = ruleData;
  showItemIndex = 0;
  constructor() { }

  ngOnInit() {
  }
}
