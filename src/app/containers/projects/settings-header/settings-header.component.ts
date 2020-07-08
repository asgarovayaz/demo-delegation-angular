import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings-header',
  templateUrl: './settings-header.component.html'
})
export class SettingsHeaderComponent implements OnInit {


  @ViewChild('searchDelegations') search: any;
  constructor() { }

  ngOnInit() {
  }

}
