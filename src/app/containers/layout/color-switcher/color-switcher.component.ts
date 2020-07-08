import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-color-switcher',
  templateUrl: './color-switcher.component.html',
})
export class ColorSwitcherComponent implements OnInit {

  colors: string[] = ['bluenavy', 'blueyale', 'blueolympic', 'greenmoss', 'greenlime', 'purplemonster', 'orangecarrot', 'redruby', 'yellowgranola', 'greysteel'];
  selectedColor: string = localStorage.getItem(environment.themeColorStorageKey) || environment.defaultColor;
  isOpenSwitcher = false;
  toggleClass = 'theme-colors';
  radius = localStorage.getItem(environment.themeRadiusStorageKey) || 'rounded';

  ngOnInit() {

  }

  changeColor(color: string) {
    this.selectedColor = color;
    localStorage.setItem(environment.themeColorStorageKey, color);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  toggleSwitcher(event) {
    this.isOpenSwitcher = !(this.isOpenSwitcher);
    this.toggleClass = this.isOpenSwitcher ? 'theme-colors shown' : 'theme-colors hidden';
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event) {
    this.isOpenSwitcher = false;
    this.toggleClass = 'theme-colors hidden';
  }
}
