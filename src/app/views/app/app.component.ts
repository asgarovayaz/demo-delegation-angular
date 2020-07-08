import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISidebar, SidebarService } from '@delegation/containers/layout/sidebar/sidebar.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  sidebar: ISidebar;
  subscription: Subscription;
  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.subscription = this.sidebarService.getSidebar().subscribe(
      res => {
        this.sidebar = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
