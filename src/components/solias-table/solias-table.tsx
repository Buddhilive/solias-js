import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'solias-table',
  styleUrl: 'solias-table.css',
  shadow: true,
})
export class SoliasTable {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
