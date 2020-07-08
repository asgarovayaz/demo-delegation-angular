import { AccordionModule, BsDropdownModule, ModalModule, PaginationModule, RatingModule, TabsModule } from 'ngx-bootstrap';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';

import { BootstrapModule } from '@delegation/components/bootstrap/bootstrap.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import { ComponentsCardsModule } from '@delegation/components/cards/components.cards.module';
import { ComponentsCarouselModule } from '@delegation/components/carousel/components.carousel.module';
import { ComponentsChartModule } from '@delegation/components/charts/components.charts.module';
import { ContextMenuModule } from 'ngx-contextmenu';
import { DetailComponent } from './detail/detail.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { LayoutContainersModule } from '@delegation/containers/layout/layout.containers.module';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProjectsComponent } from './projects.component';
import { ProjectsContainersModule } from '@delegation/containers/projects/projects.containers.module';
import { ProjectsRoutingModule } from './projects.routing';
import { SharedModule } from '@delegation/shared/shared.module';

@NgModule({
  declarations: [ProjectsComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsCarouselModule,
    LayoutContainersModule,
    ProjectsContainersModule,
    ComponentsCardsModule,
    ComponentsChartModule,
    RatingModule,
    BsDatepickerModule,
    FormsModuleAngular,
    ReactiveFormsModule,
    ProjectsRoutingModule,
    NgxDatatableModule,
    CollapseModule,
    BootstrapModule,
    HotkeyModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    })
  ]
})
export class ProjectsModule { }
