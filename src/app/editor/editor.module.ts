import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

const ira_routes: Routes = [
  {
    path: 'app',
    component: EditorComponent
  }
];

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ira_routes),
    SharedModule,
    DragDropModule
  ],
  exports: [
    RouterModule
  ]
})
export class EditorModule { }
