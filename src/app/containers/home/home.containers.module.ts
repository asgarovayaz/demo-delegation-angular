import { BsDropdownModule, ModalModule, ProgressbarModule, RatingModule } from 'ngx-bootstrap';
import { CalendarDateFormatter, CalendarModule, CalendarNativeDateFormatter, DateAdapter, DateFormatterParams } from 'angular-calendar';
import { Injectable, NgModule } from '@angular/core';

import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ComponentsCardsModule } from '@delegation/components/cards/components.cards.module';
import { ComponentsCarouselModule } from '@delegation/components/carousel/components.carousel.module';
import { ComponentsChartModule } from '@delegation/components/charts/components.charts.module';
import { FormsModule } from '@angular/forms';
import { IconCardsCarouselComponent } from './icon-cards-carousel/icon-cards-carousel.component';
import { LogsComponent } from './logs/logs.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductCategoriesPolarAreaComponent } from './product-categories-polar-area/product-categories-polar-area.component';
import { ReservationsStatusesComponent } from './reservation-statuses/reservation-statuses.component';
import { SharedModule } from '@delegation/shared/shared.module';
import { SortablejsModule } from 'ngx-sortablejs';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@Injectable()
export class CustomDateFormatter extends CalendarNativeDateFormatter {
  public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date);
  }
}

@NgModule({
    declarations: [
        AdvancedSearchComponent,
        CalendarComponent,
        IconCardsCarouselComponent,
        LogsComponent,
        ProductCategoriesPolarAreaComponent,
        ReservationsStatusesComponent

    ],
    imports: [
        SharedModule,
        ComponentsCarouselModule,
        ComponentsChartModule,
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        }),
        ComponentsCardsModule,
        NgxDatatableModule,
        SortablejsModule,
        RatingModule,
        FormsModule,
        NgSelectModule,
        ProgressbarModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot()
    ],
    providers: [
      {provide: CalendarDateFormatter, useClass: CustomDateFormatter}
    ],
    exports: [
        AdvancedSearchComponent,
        CalendarComponent,
        IconCardsCarouselComponent,
        LogsComponent,
        ProductCategoriesPolarAreaComponent,
        ReservationsStatusesComponent,
    ]
})

export class HomeContainersModule { }
