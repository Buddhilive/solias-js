import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';


const ira_routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: '',
    loadChildren: './shared/shared.module#SharedModule'
  },
  {
    path: '',
    loadChildren: './editor/editor.module#EditorModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ira_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
