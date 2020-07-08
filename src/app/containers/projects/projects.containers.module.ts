import {
   AccordionModule,
   BsDropdownModule,
   CollapseModule,
   PaginationModule,
   RatingModule,
   TabsModule
} from 'ngx-bootstrap';

import { AddNewHotelsModalComponent } from './add-new-hotels-modal/add-new-hotels-modal.component';
import { AddNewMealsModalComponent } from './add-new-meals-modal/add-new-meals-modal.component';
import { AddNewProjectModalComponent } from './add-new-project-modal/add-new-project-modal.component';
import { AddNewUsersModalComponent } from './add-new-users-modal/add-new-users-modal.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { ComponentsCardsModule } from '@delegation/components/cards/components.cards.module';
import { ComponentsCarouselModule } from '@delegation/components/carousel/components.carousel.module';
import { ComponentsPagesModule } from '@delegation/components/pages/components.pages.module';
import { ComponentsPlayerModule } from '@delegation/components/player/components.player.module';
import { DelegationsHeaderComponent } from './delegations-header/delegations-header.component';
import { FeatureComparisonComponent } from './feature-comparison/feature-comparison.component';
import { FormsModule } from '@angular/forms';
import { HotelsHeaderComponent } from './hotels-header/hotels-header.component';
import { LayoutContainersModule } from '../layout/layout.containers.module';
import { LightboxModule } from 'ngx-lightbox';
import { ListHeaderComponent } from './list-header/list-header.component';
import { MealsHeaderComponent } from './meals-header/meals-header.component';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProjectDetailDelegationsComponent } from './project-detail-delegations/project-detail-delegations.component';
import { ProjectDetailExportComponent } from './project-detail-export/project-detail-export.component';
import { ProjectDetailHotelsComponent } from './project-detail-hotels/project-detail-hotels.component';
import { ProjectDetailInfoAltComponent } from './project-detail-info-alt/project-detail-info-alt.component';
import { ProjectDetailInfoComponent } from './project-detail-info/project-detail-info.component';
import { ProjectDetailMailComponent } from './project-detail-mail/project-detail-mail.component';
import { ProjectDetailMealsComponent } from './project-detail-meals/project-detail-meals.component';
import { ProjectDetailOrdersComponent } from './project-detail-orders/project-detail-orders.component';
import { ProjectDetailSettingsComponent } from './project-detail-settings/project-detail-settings.component';
import { ProjectDetailTabsComponent } from './project-detail-tabs/project-detail-tabs.component';
import { ProjectDetailUsersComponent } from './project-detail-users/project-detail-users.component';
import { ProjectInfoCarouselComponent } from './project-info-carousel/icon-cards-carousel.component';
import { QuillModule } from 'ngx-quill';
import { RouterModule } from '@angular/router';
import { SettingsHeaderComponent } from './settings-header/settings-header.component';
import { SharedModule } from '@delegation/shared/shared.module';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { UsersHeaderComponent } from './users-header/users-header.component';

@NgModule({
  declarations: [
    AddNewProjectModalComponent,
    AddNewUsersModalComponent,
    AddNewHotelsModalComponent,
    AddNewMealsModalComponent,
    ListHeaderComponent,
    UsersHeaderComponent,
    MealsHeaderComponent,
    DelegationsHeaderComponent,
    SettingsHeaderComponent,
    FeatureComparisonComponent,
    ProjectDetailInfoAltComponent,
    ProjectDetailOrdersComponent,
    ProjectDetailInfoComponent,
    ProjectDetailTabsComponent,
    ProjectDetailSettingsComponent,
    ProjectDetailUsersComponent,
    ProjectDetailHotelsComponent,
    ProjectDetailMealsComponent,
    ProjectDetailDelegationsComponent,
    HotelsHeaderComponent,
    ProjectDetailExportComponent,
    ProjectDetailMailComponent,
    ProjectInfoCarouselComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CollapseModule,
    FormsModule,
    LayoutContainersModule,
    NgSelectModule,
    LightboxModule,
    ComponentsPagesModule,
    NgxDatatableModule,
    ComponentsCardsModule,
    ComponentsPlayerModule,
    ComponentsCarouselModule,
    QuillModule.forRoot(),
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    PaginationModule.forRoot()
  ],
  exports: [
    AddNewProjectModalComponent,
    AddNewUsersModalComponent,
    AddNewHotelsModalComponent,
    AddNewMealsModalComponent,
    ListHeaderComponent,
    UsersHeaderComponent,
    MealsHeaderComponent,
    DelegationsHeaderComponent,
    SettingsHeaderComponent,
    FeatureComparisonComponent,
    ProjectDetailInfoAltComponent,
    ProjectDetailOrdersComponent,
    ProjectDetailInfoComponent,
    ProjectDetailTabsComponent,
    ProjectDetailSettingsComponent,
    ProjectDetailUsersComponent,
    ProjectDetailHotelsComponent,
    ProjectDetailMealsComponent,
    ProjectDetailDelegationsComponent,
    ProjectDetailExportComponent,
    ProjectDetailMailComponent,
    HotelsHeaderComponent,
    ProjectInfoCarouselComponent
  ]
})
export class ProjectsContainersModule { }
