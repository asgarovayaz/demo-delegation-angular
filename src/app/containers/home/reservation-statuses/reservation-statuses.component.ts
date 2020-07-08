import { Component, Input, OnInit } from '@angular/core';
import reservationStatuses, { IReservationStatus } from '@delegation/services/fake-data/reservation-statuses';

@Component({
  selector: 'app-reservation-statuses',
  templateUrl: './reservation-statuses.component.html'
})
export class ReservationsStatusesComponent implements OnInit {

  @Input() class = '';

  data: IReservationStatus[] = reservationStatuses;
  constructor() { }

  ngOnInit() {
  }

}
