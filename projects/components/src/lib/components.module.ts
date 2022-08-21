import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    ButtonComponent,
    NavbarComponent,
    LabelComponent,
    InputComponent
  ],
  imports: [
  ],
  exports: [
    ButtonComponent
  ]
})
export class ComponentsModule { }
