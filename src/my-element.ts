import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import TokenImage from '../components/TokenImage';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = '$requesterUsername';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;
  // button will always increase 1 forever
  render() {
    return html`
      <h1>Token # ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <TokenImage />
      <slot>yo</slot>
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
