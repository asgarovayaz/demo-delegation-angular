import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hotels-header',
  templateUrl: './hotels-header.component.html'
})
export class HotelsHeaderComponent implements OnInit {
  displayOptionsCollapsedHotels = false;

  @Input() showOrderByHotels = true;
  @Input() showSearchHotels = true;
  @Input() showItemsPerPageHotels = true;
  @Input() showDisplayModeHotels = true;
  @Input() displayModeHotels = 'list';
  @Input() selectAllStateHotels = '';
  @Input() itemsPerPageHotels = 10;
  @Input() itemOptionsPerPageHotels = [5, 10, 20];
  @Input() itemOrderHotels = { label: 'Product Name', value: 'title' };
  @Input() itemOptionsOrdersHotels = [{ label: 'Product Name', value: 'title' }, { label: 'Category', value: 'category' }, { label: 'Status', value: 'status' }];

  @Output() changeDisplayModeHotels: EventEmitter<string> = new EventEmitter<string>();
  @Output() addNewItemHotels: EventEmitter<any> = new EventEmitter();
  @Output() selectAllChangeHotels: EventEmitter<any> = new EventEmitter();
  @Output() searchKeyUpHotels: EventEmitter<any> = new EventEmitter();
  @Output() itemsPerPageChangeHotels: EventEmitter<any> = new EventEmitter();
  @Output() changeOrderByHotels: EventEmitter<any> = new EventEmitter();
  @Output() addNewHotel: EventEmitter<any> = new EventEmitter();

  @ViewChild('searchHotels') search: any;
  constructor() { }

  ngOnInit() {
  }

  onSelectDisplayModeHotels(mode: string) {
    this.changeDisplayModeHotels.emit(mode);
  }
  onAddNewItemHotels() {
    this.addNewItemHotels.emit(null);
  }
  selectAllHotels(event) {
    this.selectAllChangeHotels.emit(event);
  }
  onChangeItemsPerPageHotels(item) {
    this.itemsPerPageChangeHotels.emit(item);
  }

  onChangeOrderByHotels(item) {
    this.itemOrderHotels = item;
    this.changeOrderByHotels.emit(item);
  }

  onSearchKeyUpHotels($event) {
    this.searchKeyUpHotels.emit($event);
  }

  onAddNewHotel() {
    this.addNewHotel.emit(null);
  }

}
