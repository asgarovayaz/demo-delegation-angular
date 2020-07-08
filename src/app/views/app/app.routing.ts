import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
            { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
            { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
            { path: 'rules', loadChildren: () => import('./rules/rules.module').then(m => m.RulesModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
