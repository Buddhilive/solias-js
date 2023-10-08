import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'solias-button',
  styleUrl: 'solias-button.scss',
  shadow: true,
})
export class SoliasButton {

  /**
   * Button Label
   */
  @Prop() label: string;

  /** 
   * Button custom class
  */
  @Prop() styleClass: string = 'solias-button';

  /**
   * Button style
   */
  @Prop() styleType: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal' = 'filled';

  /**
   * Disables button
   */
  @Prop() disable: boolean = false;

  render() {
    return (
      <button class={`solias-btn solias-btn--${this.styleType} ${this.styleClass}`}
        disabled={this.disable}
      >
        {this.label}
      </button>
    );
  }

}
