import { MenuLevelsComponent } from './menu-levels.component';
import { MenuLevelsRoutingModule } from './menu-levels.routing';
import { NgModule } from '@angular/core';
import { SharedModule } from '@delegation/shared/shared.module';
import { ThirdLevel1Component } from './third-level1/third-level1.component';
import { ThirdLevel2Component } from './third-level2/third-level2.component';
import { ThirdLevel3Component } from './third-level3/third-level3.component';

@NgModule({
  declarations: [MenuLevelsComponent, ThirdLevel1Component, ThirdLevel2Component, ThirdLevel3Component],
  imports: [
    SharedModule,
    MenuLevelsRoutingModule
  ]
})
export class MenuLevelsModule { }
