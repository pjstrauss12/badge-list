import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class SearchWidget extends LitElement {
  static get properties() {
    return {
      value: { type: String },
    }
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }
    simple-icon {
      --simple-icon-height: 40px;
      --simple-icon-width: 40px;
    }
    .wrapper{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .searchbar{
      width: 500px;  
      height: 30px;
      border: 1px solid #f8f8f7;
      font-family: verdana, sans-serif;
      display: block;
      padding: 8px 4px 8px 64px;
      background-position: 24px;
    }
    `;
  }

  constructor() {
    super();
    this.value = '';
  }

  render() {
    return html`
    <div class="wrapper">
    <simple-icon icon="icons:search"></simple-icon><input type="text" class="searchbar" value="${this.value}" @input="${this._handleInput}" />
    </div>
    `;
  }
  _handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('value-changed', {
      detail: {
        value: this.value,
      }
    }));
  }
}

customElements.define('search-widget', SearchWidget);