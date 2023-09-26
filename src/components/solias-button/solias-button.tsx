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

  /** 
   * Button custom class
  */
  @Prop() styleClass: string;

  render() {
    return (
      <button class={this.styleClass}>{this.label}</button>
    );
  }

}
