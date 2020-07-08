import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AddNewUsersModalComponent } from '../add-new-users-modal/add-new-users-modal.component';
import usersItems from '@delegation/services/fake-data/users';

@Component({
  selector: 'app-project-detail-users',
  templateUrl: './project-detail-users.component.html'
})
export class ProjectDetailUsersComponent implements OnInit {
  @ViewChild(DatatableComponent) tableUsers: DatatableComponent;
  @ViewChild('addNewUserModalRef', { static: true }) addNewUserModalRef: AddNewUsersModalComponent;

  rowsUsers = usersItems.slice(0, 20).map(({ Role, FirstName, LastName, Country, Email, id }) => ({ Role, FirstName, LastName, Country, Email, id }));

  columnsUsers = [
    { prop: 'Role', name: 'Role' },
    { prop: 'FullName', name: 'Full Name' },
    { prop: 'Country', name: 'Country' },
    { prop: 'Email', name: 'Email' },
    { prop: 'id', name: 'id' }
  ];

  columnModeUsers = ColumnMode;
  tempUsers = [...this.rowsUsers];
  itemsPerPageUsers = 10;
  itemOptionsPerPageUsers = [5, 10, 20];
  selectedUsers = [];
  selectionTypeUsers = SelectionType;
  selectAllStateUsers = '';

  constructor() { }

  ngOnInit() {
  }

  updateFilterUsers(event) {
    const val = event.target.value.toLowerCase().trim();
    const count = this.columnsUsers.length;
    const keys = Object.keys(this.tempUsers[0]);
    const temp = this.tempUsers.filter(item => {
      for (let i = 0; i < count; i++) {
        if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
          return true;
        }
      }
    });
    this.rowsUsers = temp;
    this.tableUsers.offset = 0;
  }

  onSelectUsers({ Selected }) {
    this.selectedUsers.splice(0, this.selectedUsers.length);
    this.selectedUsers.push(...Selected);
    this.setSelectAllStateUsers();
  }

  setSelectAllStateUsers() {
    if (this.selectedUsers.length === this.rowsUsers.length) {
      this.selectAllStateUsers = 'checked';
    } else if (this.selectedUsers.length !== 0) {
      this.selectAllStateUsers = 'indeterminate';
    } else {
      this.selectAllStateUsers = '';
    }
  }

  selectAllChangeUsers($event) {
    if ($event.target.checked) {
      this.selectedUsers = [...this.rowsUsers];
    } else {
      this.selectedUsers = [];
    }
    this.setSelectAllStateUsers();
  }

  onItemsPerPageChangeUsers(itemCount) {
    this.itemsPerPageUsers = itemCount;
  }

  showAddNewUserModal(){
    this.addNewUserModalRef.show();
  }

}
