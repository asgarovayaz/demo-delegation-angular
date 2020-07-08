import { CollapseModule, PaginationModule } from 'ngx-bootstrap';

import { ComponentsCardsModule } from '@delegation/components/cards/components.cards.module';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq.routing';
import { LayoutContainersModule } from '@delegation/containers/layout/layout.containers.module';
import { NgModule } from '@angular/core';
import { PagesContainersModule } from '@delegation/containers/pages/pages.containers.module';
import { SharedModule } from '@delegation/shared/shared.module';

@NgModule({
  declarations: [ FaqComponent ],
  imports: [
    SharedModule,
    FaqRoutingModule,
    LayoutContainersModule,
    ComponentsCardsModule,
    PagesContainersModule,
    PaginationModule.forRoot(),
    CollapseModule.forRoot()
  ]
})
export class FaqModule { }
