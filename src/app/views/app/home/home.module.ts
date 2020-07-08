import { ComponentsCardsModule } from '@delegation/components/cards/components.cards.module';
import { HomeComponent } from './home.component';
import { HomeContainersModule } from '@delegation/containers/home/home.containers.module';
import { HomeRoutingModule } from './home.routing';
import { LayoutContainersModule } from '@delegation/containers/layout/layout.containers.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@delegation/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    HomeContainersModule,
    HomeRoutingModule,
    ComponentsCardsModule
  ]
})
export class HomeModule { }
