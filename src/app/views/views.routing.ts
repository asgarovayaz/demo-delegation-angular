import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@delegation/helpers';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { ViewsComponent } from './views.component';
import { environment } from './../../environments/environment';

let routes: Routes = [

  { path: '', loadChildren: () => import('./app/app.module').then(m => m.AppModule), canActivate: [AuthGuard]},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
];

if (!environment.isAuthGuardActive) {
  routes = [
    {
      path: '',
      component: ViewsComponent,
      pathMatch: 'full',
    },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/error' }
  ];
}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
