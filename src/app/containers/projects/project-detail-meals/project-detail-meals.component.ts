import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AddNewMealsModalComponent } from '../add-new-meals-modal/add-new-meals-modal.component';
import mealvenues from '@delegation/services/fake-data/mealvenues';

@Component({
  selector: 'app-project-detail-meals',
  templateUrl: './project-detail-meals.component.html'
})
export class ProjectDetailMealsComponent implements OnInit {
  @ViewChild(DatatableComponent) tableMeals: DatatableComponent;
  @ViewChild('addNewMealModalRef', { static: true }) addNewMealModalRef: AddNewMealsModalComponent;
  rowsMeals = mealvenues.slice(0, 20).map((
    { 
      Name,
      BreakFastTotal,
      BreakFastAvailable,
      LunchTotal,
      LunchAvailable,
      DinnerTotal,
      DinnerAvailable,
      Id
     }) => ({
       Name,
      BreakFastTotal,
      BreakFastAvailable,
      LunchTotal,
      LunchAvailable,
      DinnerTotal,
      DinnerAvailable,
      Id
    }));

  columnsMeals = [
    { prop: 'name', name: 'Name' },
    { prop: 'BreakFastTotal', name: 'Breakfast Total' },
    { prop: 'BreakFastAvailable', name: 'Breakfast Available' },
    { prop: 'LunchTotal', name: 'Lunch Total' },
    { prop: 'LunchAvailable', name: 'Lunch Available' },
    { prop: 'DinnerTotal', name: 'Dinner Total' },
    { prop: 'DinnerAvailable', name: 'Dinner Available' },
    { prop: 'Id', name: 'Id' }
  ];

  columnModeMeals = ColumnMode;
  tempMeals = [...this.rowsMeals];
  itemsPerPageMeals = 10;
  itemOptionsPerPageMeals = [5, 10, 20];
  selectedMeals = [];
  selectionTypeMeals = SelectionType;
  selectAllStateMeals = '';

  constructor() { }

  ngOnInit() {
  }

  updateFilterMeals(event) {
    const val = event.target.value.toLowerCase().trim();
    const count = this.columnsMeals.length;
    const keys = Object.keys(this.tempMeals[0]);
    const temp = this.tempMeals.filter(item => {
      for (let i = 0; i < count; i++) {
        if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
          return true;
        }
      }
    });
    this.rowsMeals = temp;
    this.tableMeals.offset = 0;
  }

  onSelectMeals({ Selected }) {
    this.selectedMeals.splice(0, this.selectedMeals.length);
    this.selectedMeals.push(...Selected);
    this.setSelectAllStateMeals();
  }

  setSelectAllStateMeals() {
    if (this.selectedMeals.length === this.rowsMeals.length) {
      this.selectAllStateMeals = 'checked';
    } else if (this.selectedMeals.length !== 0) {
      this.selectAllStateMeals = 'indeterminate';
    } else {
      this.selectAllStateMeals = '';
    }
  }

  selectAllChangeMeals($event) {
    if ($event.target.checked) {
      this.selectedMeals = [...this.rowsMeals];
    } else {
      this.selectedMeals = [];
    }
    this.setSelectAllStateMeals();
  }

  onItemsPerPageChangeMeals(itemCount) {
    this.itemsPerPageMeals = itemCount;
  }

  showAddNewMealModal() {
    this.addNewMealModalRef.show();
  }

}
