import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HotelDataService, IHotelClass } from '@delegation/services/hotels.data.service';

@Component({
  selector: 'app-add-new-hotels-modal',
  templateUrl: './add-new-hotels-modal.component.html'
})
export class AddNewHotelsModalComponent implements OnInit {
  @ViewChild('HotelsTemplate', { static: true }) template: TemplateRef<any>;

  hotelclass: IHotelClass[];
  selectedClass = '1st class';

  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };



  constructor(
    private modalService: BsModalService,
    private selectHotelService: HotelDataService) {
      this.hotelclass = selectHotelService.hotelclass;
     }

  ngOnInit() {

  }

  show() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

}
