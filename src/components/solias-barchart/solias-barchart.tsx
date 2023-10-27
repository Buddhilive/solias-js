import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'solias-barchart',
  shadow: true,
})
export class SoliasBarchart {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
