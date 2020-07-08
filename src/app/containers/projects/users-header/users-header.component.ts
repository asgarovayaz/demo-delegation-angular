import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html'
})
export class UsersHeaderComponent implements OnInit {
  displayOptionsCollapsedUsers = false;

  @Input() showOrderByUsers = true;
  @Input() showSearchUsers = true;
  @Input() showItemsPerPageUsers = true;
  @Input() showDisplayModeUsers = true;
  @Input() displayModeUsers = 'list';
  @Input() selectAllStateUsers = '';
  @Input() itemsPerPageUsers = 10;
  @Input() itemOptionsPerPageUsers = [5, 10, 20];
  @Input() itemOrderUsers = { label: 'Product Name', value: 'title' };
  @Input() itemOptionsOrdersUsers = [{ label: 'Product Name', value: 'title' }, { label: 'Category', value: 'category' }, { label: 'Status', value: 'status' }];

  @Output() changeDisplayModeUsers: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectAllChangeUsers: EventEmitter<any> = new EventEmitter();
  @Output() searchKeyUpUsers: EventEmitter<any> = new EventEmitter();
  @Output() itemsPerPageChangeUsers: EventEmitter<any> = new EventEmitter();
  @Output() changeOrderByUsers: EventEmitter<any> = new EventEmitter();
  @Output() addNewUser: EventEmitter<any> = new EventEmitter();


  @ViewChild('searchUsers') search: any;
  constructor() { }

  ngOnInit() {
  }

  onSelectDisplayModeUsers(mode: string) {
    this.changeDisplayModeUsers.emit(mode);
  }
  selectAllUsers(event: any) {
    this.selectAllChangeUsers.emit(event);
  }
  onChangeItemsPerPageUsers(item: any) {
    this.itemsPerPageChangeUsers.emit(item);
  }

  onChangeOrderByUsers(item: { label: string; value: string; }) {
    this.itemOrderUsers = item;
    this.changeOrderByUsers.emit(item);
  }

  onSearchKeyUpUsers($event: any) {
    this.searchKeyUpUsers.emit($event);
  }

  onAddNewUser(){
    this.addNewUser.emit(null);
  }

}
