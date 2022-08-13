import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    ButtonComponent
  ]
})
export class ComponentsModule { }
