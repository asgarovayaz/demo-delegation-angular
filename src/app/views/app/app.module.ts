import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';
import { LayoutContainersModule } from '@delegation/containers/layout/layout.containers.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@delegation/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class AppModule { }

