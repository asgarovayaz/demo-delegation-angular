import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { GlideComponent } from '@delegation/components/carousel/glide/glide.component';

interface IIconCardItem {
  title: string;
  icon: string;
  value: number;
}

@Component({
  selector: 'app-project-info-carousel',
  templateUrl: './project-info-carousel.component.html'
})
export class ProjectInfoCarouselComponent implements OnInit {
  @Input() class = 'icon-cards-row';
  @ViewChild('carousel', { static: false }) carousel: GlideComponent;
  data: IIconCardItem[] = [
    { title: 'projects.detail.waiting-reservation-flights', icon: 'simple-icon-plane', value: 14 },
    { title: 'projects.detail.waiting-rooms-reservation', icon: 'iconsminds-hotel', value: 32 },
    { title: 'projects.detail.waiting-upload-documents', icon: 'iconsminds-box-with-folders', value: 74 },
    { title: 'projects.detail.waiting-upload-meals', icon: 'iconsminds-hamburger', value: 25 }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
