import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ViewRoutingModule } from './views.routing';
import { ViewsComponent } from './views.component';

@NgModule({
  declarations: [ViewsComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
  ]
})
export class ViewsModule { }
