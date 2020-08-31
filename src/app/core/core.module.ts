import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { GridsterModule } from 'angular-gridster2';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    GridsterModule,
    SharedModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
