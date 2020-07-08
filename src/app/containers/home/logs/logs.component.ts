import { Component, OnInit } from '@angular/core';
import avtivitiesItems, { IActivities } from '@delegation/services/fake-data/activities';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html'
})
export class LogsComponent implements OnInit {

  constructor() { }

  data: IActivities[] = avtivitiesItems;

  ngOnInit() {
  }

}
