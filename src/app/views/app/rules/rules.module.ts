import { CollapseModule, PaginationModule } from 'ngx-bootstrap';

import { ComponentsCardsModule } from '@delegation/components/cards/components.cards.module';
import { LayoutContainersModule } from '@delegation/containers/layout/layout.containers.module';
import { NgModule } from '@angular/core';
import { PagesContainersModule } from '@delegation/containers/pages/pages.containers.module';
import { RulesComponent } from './rules.component';
import { RulesRoutingModule } from './rules.routing';
import { SharedModule } from '@delegation/shared/shared.module';

@NgModule({
  declarations: [ RulesComponent ],
  imports: [
    SharedModule,
    RulesRoutingModule,
    LayoutContainersModule,
    ComponentsCardsModule,
    PagesContainersModule,
    PaginationModule.forRoot(),
    CollapseModule.forRoot()
  ]
})
export class RulesModule { }
