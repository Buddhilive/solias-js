import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent, InputComponent, LabelComponent, CheckboxComponent, RadioComponent, TextareaComponent } from 'projects/components/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    /* Button */
    const soliasButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('solias-button', soliasButton);

    /* Input */
    const soliasInput = createCustomElement(InputComponent, { injector });
    customElements.define('solias-input', soliasInput);

    /* Lable */
    const soliasLabel = createCustomElement(LabelComponent, { injector });
    customElements.define('solias-label', soliasLabel);

    /* Checkbox */
    const soliasCheckbox = createCustomElement(CheckboxComponent, { injector });
    customElements.define('solias-checkbox', soliasCheckbox);

    /* Radio */
    const soliasRadio = createCustomElement(RadioComponent, { injector });
    customElements.define('solias-radio', soliasRadio);

    /* Textarea */
    const soliasTextarea = createCustomElement(TextareaComponent, { injector });
    customElements.define('solias-textarea', soliasTextarea);
  }
  ngDoBootstrap() {}
}
