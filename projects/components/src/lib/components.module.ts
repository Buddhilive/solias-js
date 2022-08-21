import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { TextareaComponent } from './textarea/textarea.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    ButtonComponent,
    NavbarComponent,
    LabelComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    TextareaComponent
  ],
  imports: [
  ],
  exports: [
    ButtonComponent
  ]
})
export class ComponentsModule { }
