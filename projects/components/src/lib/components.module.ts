import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    ButtonComponent,
    NavbarComponent
  ],
  imports: [
  ],
  exports: [
    ButtonComponent
  ]
})
export class ComponentsModule { }
