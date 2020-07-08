import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AddNewHotelsModalComponent } from '../add-new-hotels-modal/add-new-hotels-modal.component';
import hotelItems from '@delegation/services/fake-data/hotels';

@Component({
  selector: 'app-project-detail-hotels',
  templateUrl: './project-detail-hotels.component.html'
})
export class ProjectDetailHotelsComponent implements OnInit {

  @ViewChild(DatatableComponent) tableHotels: DatatableComponent;
  @ViewChild('addNewHotelModalRef', { static: true }) addNewHotelModalRef: AddNewHotelsModalComponent;

  rowsHotels = hotelItems.slice(0, 20).map(({ 
    Id,
    Name,
    HotelClass,
    Rooms,
    FreeRooms
  }) => ({
    Id,
    Name,
    HotelClass,
    Rooms,
    FreeRooms
  }));

  columnsHotels = [
    { prop: 'name', name: 'Name' },
    { prop: 'hotelClass', name: 'Hotel Class' },
    { prop: 'rooms', name: 'Rooms' },
    { prop: 'freeRooms', name: 'FreeRooms' },
    { prop: 'id', name: 'Id' }
  ];

  columnModeHotels = ColumnMode;
  tempHotels = [...this.rowsHotels];
  itemsPerPageHotels = 10;
  itemOptionsPerPageHotels = [5, 10, 20];
  selectedHotels = [];
  selectionTypeHotels = SelectionType;
  selectAllStateHotels = '';

  constructor() { }

  ngOnInit() {
  }

  updateFilterHotels(event) {
    const val = event.target.value.toLowerCase().trim();
    const count = this.columnsHotels.length;
    const keys = Object.keys(this.tempHotels[0]);
    const temp = this.tempHotels.filter(item => {
      for (let i = 0; i < count; i++) {
        if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
          return true;
        }
      }
    });
    this.rowsHotels = temp;
    this.tableHotels.offset = 0;
  }

  onSelectHotels({ Selected }) {
    this.selectedHotels.splice(0, this.selectedHotels.length);
    this.selectedHotels.push(...Selected);
    this.setSelectAllStateHotels();
  }

  setSelectAllStateHotels() {
    if (this.selectedHotels.length === this.rowsHotels.length) {
      this.selectAllStateHotels = 'checked';
    } else if (this.selectedHotels.length !== 0) {
      this.selectAllStateHotels = 'indeterminate';
    } else {
      this.selectAllStateHotels = '';
    }
  }

  selectAllChangeHotels($event) {
    if ($event.target.checked) {
      this.selectedHotels = [...this.rowsHotels];
    } else {
      this.selectedHotels = [];
    }
    this.setSelectAllStateHotels();
  }

  onItemsPerPageChangeHotels(itemCount) {
    this.itemsPerPageHotels = itemCount;
  }

  showAddNewHotelModal() {
    this.addNewHotelModalRef.show();
  }

}
