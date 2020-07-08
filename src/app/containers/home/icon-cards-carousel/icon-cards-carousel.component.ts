import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { GlideComponent } from '@delegation/components/carousel/glide/glide.component';

interface IIconCardItem {
  title: string;
  icon: string;
  value: number;
}

@Component({
  selector: 'app-icon-cards-carousel',
  templateUrl: './icon-cards-carousel.component.html'
})
export class IconCardsCarouselComponent implements OnInit {
  @Input() class = 'icon-cards-row';
  @ViewChild('carousel', { static: false }) carousel: GlideComponent;
  data: IIconCardItem[] = [
    { title: 'home.total-delegations', icon: 'iconsminds-business-mens', value: 14 },
    { title: 'home.total-hotels', icon: 'iconsminds-hotel', value: 32 },
    { title: 'home.total-persons', icon: 'iconsminds-mens', value: 74 },
    { title: 'home.total-mealvenues', icon: 'iconsminds-hamburger', value: 25 },
    { title: 'home.available-rooms', icon: 'iconsminds-home-4', value: 55 }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
