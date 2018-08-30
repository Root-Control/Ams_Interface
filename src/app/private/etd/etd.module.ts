import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { etdRoutes } from './etd.routes';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(etdRoutes, { useHash: false })
  ],
  providers: [],
  exports: [],
  declarations: [AboutComponent, HomeComponent]
})

export class EtdModule { }
