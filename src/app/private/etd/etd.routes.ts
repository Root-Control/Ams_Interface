import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { Routes, RouterModule } from '@angular/router';

import { AmsLayoutComponent } from '../../_layout/ams-layout/ams-layout.component';

export const etdRoutes: Routes = [
    { 
        path: '', 
        component: AmsLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
          { path: 'about', component: AboutComponent }
        ]
    },
];