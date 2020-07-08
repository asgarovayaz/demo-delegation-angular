import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AddNewProjectModalComponent } from '@delegation/containers/projects/add-new-project-modal/add-new-project-modal.component';
import { Router } from '@angular/router';
import projects from '@delegation/services/fake-data/projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewProjectModalComponent;

  rows = projects.slice(0, 20).map(({ code, name, country, startDate, id }) => ({ code, name, country, startDate, id }));

  columns = [
    { prop: 'code', name: 'Code' },
    { prop: 'name', name: 'Name' },
    { prop: 'country', name: 'Country' },
    { prop: 'startDate', name: 'Start date' },
    { prop: 'id', name: 'Id' }
  ];
  ColumnMode = ColumnMode;
  temp = [...this.rows];
  itemsPerPage = 5;
  itemOptionsPerPage = [5, 10, 20];
  selected = [];
  SelectionType = SelectionType;
  selectAllState = '';

  constructor( private route: Router ) { }

  ngOnInit() {
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase().trim();
    const count = this.columns.length;
    const keys = Object.keys(this.temp[0]);
    const temp = this.temp.filter(item => {
      for (let i = 0; i < count; i++) {
        if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
          return true;
        }
      }
    });
    this.rows = temp;
    this.table.offset = 0;
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.setSelectAllState();
  }

  setSelectAllState() {
    if (this.selected.length === this.rows.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }

  selectAllChange($event) {
    if ($event.target.checked) {
      this.selected = [...this.rows];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }

  onItemsPerPageChange(itemCount) {
    this.itemsPerPage = itemCount;
  }

  navProjectDetails(projectId: number){
    this.route.navigate(['/projects/detail', projectId]);
  }

  showAddNewModal() {
    this.addNewModalRef.show();
  }

}
