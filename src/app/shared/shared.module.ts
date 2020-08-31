import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

const ira_routes: Routes = [
  {
    path: 'login',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ira_routes),
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
