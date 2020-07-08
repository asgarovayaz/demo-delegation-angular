import { LayoutContainersModule } from '@delegation/containers/layout/layout.containers.module';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing';
import { MenuTypesComponent } from './menu-types/menu-types.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@delegation/shared/shared.module';

@NgModule({
  declarations: [MenuComponent, MenuTypesComponent],
  imports: [
    SharedModule,
    MenuRoutingModule,
    LayoutContainersModule
  ]
})
export class MenuModule { }
