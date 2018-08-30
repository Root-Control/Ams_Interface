import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EtdModule } from './etd/etd.module';

import { PrivateComponent } from './private.component';

@NgModule({
  imports: [
  	EtdModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  exports: [PrivateComponent],
  declarations: [PrivateComponent]
})

export class PrivateModule { }
