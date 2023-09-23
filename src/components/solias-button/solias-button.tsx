import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'solias-button',
  styleUrl: 'solias-button.scss',
  shadow: true,
})
export class SoliasButton {

  /**
   * 
   * Button Label
   */
  @Prop() label: string;

  render() {
    return (
      <button class="solias-button">{this.label}</button>
    );
  }

}
