import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

import { Injectable } from '@angular/core';
import { LangService } from './shared/lang.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

@Injectable()
export class AppComponent implements OnInit, AfterViewInit {
  isMultiColorActive = environment.isMultiColorActive;
  constructor(private langService: LangService, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.langService.init();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.addClass(document.body, 'show');
    }, 1000);
    setTimeout(() => {
      this.renderer.addClass(document.body, 'default-transition');
    }, 1500);
  }
}
