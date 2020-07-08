import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Component, OnInit, ViewChild } from '@angular/core';

import delegations from '@delegation/services/fake-data/delegations';

@Component({
  selector: 'app-project-detail-delegations',
  templateUrl: './project-detail-delegations.component.html'
})
export class ProjectDetailDelegationsComponent implements OnInit {
  @ViewChild(DatatableComponent) tableDelegations: DatatableComponent;
  rowsDelegations = delegations.slice(0, 20).map((
    { 
      Id,
      Country,
      UpdateDate,
      UpdatedBy
     }) => ({
      Id,
      Country,
      UpdateDate,
      UpdatedBy
    }));
  columnsDelegations = [
    { prop: 'Country', name: 'Country' },
    { prop: 'UpdateDate', name: 'Last update' },
    { prop: 'UpdatedBy', name: 'Updated by' },
    { prop: 'Id', name: 'Id' }
  ];

  columnModeDelegations = ColumnMode;
  tempDelegations = [...this.rowsDelegations];
  itemsPerPageDelegations = 10;
  itemOptionsPerPageDelegations = [5, 10, 20];
  selectedDelegations = [];
  selectionTypeDelegations = SelectionType;
  selectAllStateDelegations = '';

  constructor() { }

  ngOnInit() {
  }

  updateFilterDelegations(event) {
    const val = event.target.value.toLowerCase().trim();
    const count = this.columnsDelegations.length;
    const keys = Object.keys(this.tempDelegations[0]);
    const temp = this.tempDelegations.filter(item => {
      for (let i = 0; i < count; i++) {
        if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
          return true;
        }
      }
    });
    this.rowsDelegations = temp;
    this.tableDelegations.offset = 0;
  }

  onSelectDelegations({ Selected }) {
    this.selectedDelegations.splice(0, this.selectedDelegations.length);
    this.selectedDelegations.push(...Selected);
    this.setSelectAllStateDelegations();
  }

  setSelectAllStateDelegations() {
    if (this.selectedDelegations.length === this.rowsDelegations.length) {
      this.selectAllStateDelegations = 'checked';
    } else if (this.selectedDelegations.length !== 0) {
      this.selectAllStateDelegations = 'indeterminate';
    } else {
      this.selectAllStateDelegations = '';
    }
  }

  selectAllChangeDelegations($event) {
    if ($event.target.checked) {
      this.selectedDelegations = [...this.rowsDelegations];
    } else {
      this.selectedDelegations = [];
    }
    this.setSelectAllStateDelegations();
  }

  onItemsPerPageChangeDelegations(itemCount) {
    this.itemsPerPageDelegations = itemCount;
  }

}
