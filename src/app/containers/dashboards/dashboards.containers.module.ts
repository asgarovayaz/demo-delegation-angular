import { BsDropdownModule, ModalModule, ProgressbarModule, RatingModule } from 'ngx-bootstrap';
import { CalendarDateFormatter, CalendarModule, CalendarNativeDateFormatter, DateAdapter, DateFormatterParams } from 'angular-calendar';
import { Injectable, NgModule } from '@angular/core';

import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { ComponentsCardsModule } from '@delegation/components/cards/components.cards.module';
import { ComponentsCarouselModule } from '@delegation/components/carousel/components.carousel.module';
import { ComponentsChartModule } from '@delegation/components/charts/components.charts.module';
import { FormsModule } from '@angular/forms';
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
        BestSellersComponent,
        CalendarComponent,
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
        SortablejsModule,
        RatingModule,
        FormsModule,
        ProgressbarModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot()
    ],
    providers: [
      {provide: CalendarDateFormatter, useClass: CustomDateFormatter}
    ],
    exports: [
        AdvancedSearchComponent,
        BestSellersComponent,
        CalendarComponent,
    ]
})

export class DashboardsContainersModule { }
