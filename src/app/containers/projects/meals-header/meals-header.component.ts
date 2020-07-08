import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-meals-header',
  templateUrl: './meals-header.component.html'
})
export class MealsHeaderComponent implements OnInit {
  displayOptionsCollapsedMeals = false;

  @Input() showOrderByMeals = true;
  @Input() showSearchMeals = true;
  @Input() showItemsPerPageMeals = true;
  @Input() showDisplayModeMeals = true;
  @Input() displayModeMeals = 'list';
  @Input() selectAllStateMeals = '';
  @Input() itemsPerPageMeals = 10;
  @Input() itemOptionsPerPageMeals = [5, 10, 20];
  @Input() itemOrderMeals = { label: 'Product Name', value: 'title' };
  @Input() itemOptionsOrdersMeals = [{ label: 'Product Name', value: 'title' }, { label: 'Category', value: 'category' }, { label: 'Status', value: 'status' }];

  @Output() changeDisplayModeMeals: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectAllChangeMeals: EventEmitter<any> = new EventEmitter();
  @Output() searchKeyUpMeals: EventEmitter<any> = new EventEmitter();
  @Output() itemsPerPageChangeMeals: EventEmitter<any> = new EventEmitter();
  @Output() changeOrderByMeals: EventEmitter<any> = new EventEmitter();
  @Output() addNewMeal: EventEmitter<any> = new EventEmitter();

  @ViewChild('searchMeals') search: any;
  constructor() { }

  ngOnInit() {
  }

  onSelectDisplayModeMeals(mode: string) {
    this.changeDisplayModeMeals.emit(mode);
  }
  selectAllMeals(event) {
    this.selectAllChangeMeals.emit(event);
  }
  onChangeItemsPerPageMeals(item) {
    this.itemsPerPageChangeMeals.emit(item);
  }

  onChangeOrderByMeals(item) {
    this.itemOrderMeals = item;
    this.changeOrderByMeals.emit(item);
  }

  onSearchKeyUpMeals($event) {
    this.searchKeyUpMeals.emit($event);
  }

  onAddNewMeal() {
    this.addNewMeal.emit(null);
  }


}
