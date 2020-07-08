import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-delegations-header',
  templateUrl: './delegations-header.component.html'
})
export class DelegationsHeaderComponent implements OnInit {
  displayOptionsCollapsedDelegations = false;

  @Input() showOrderByDelegations = true;
  @Input() showSearchDelegations = true;
  @Input() showItemsPerPageDelegations = true;
  @Input() showDisplayModeDelegations = true;
  @Input() displayModeDelegations = 'list';
  @Input() selectAllStateDelegations = '';
  @Input() itemsPerPageDelegations = 10;
  @Input() itemOptionsPerPageDelegations = [5, 10, 20];
  @Input() itemOrderDelegations = { label: 'Product Name', value: 'title' };
  @Input() itemOptionsOrdersDelegations = [{ label: 'Product Name', value: 'title' }, { label: 'Category', value: 'category' }, { label: 'Status', value: 'status' }];

  @Output() changeDisplayModeDelegations: EventEmitter<string> = new EventEmitter<string>();
  @Output() addNewItemDelegations: EventEmitter<any> = new EventEmitter();
  @Output() selectAllChangeDelegations: EventEmitter<any> = new EventEmitter();
  @Output() searchKeyUpDelegations: EventEmitter<any> = new EventEmitter();
  @Output() itemsPerPageChangeDelegations: EventEmitter<any> = new EventEmitter();
  @Output() changeOrderByDelegations: EventEmitter<any> = new EventEmitter();

  @ViewChild('searchDelegations') search: any;
  constructor() { }

  ngOnInit() {
  }

  onSelectDisplayModeDelegations(mode: string) {
    this.changeDisplayModeDelegations.emit(mode);
  }
  onAddNewItemDelegations() {
    this.addNewItemDelegations.emit(null);
  }
  selectAllDelegations(event) {
    this.selectAllChangeDelegations.emit(event);
  }
  onChangeItemsPerPageDelegations(item) {
    this.itemsPerPageChangeDelegations.emit(item);
  }

  onChangeOrderByDelegations(item) {
    this.itemOrderDelegations = item;
    this.changeOrderByDelegations.emit(item);
  }

  onSearchKeyUpDelegations($event) {
    this.searchKeyUpDelegations.emit($event);
  }
}
