import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "./badge-element.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BadgeList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`

    input {
      font-size: 20px;
      font-weight: bold;
      border: none;
      border-bottom: 1px solid black;
      transition: all .3s ease-in-out;
      width: 500px;
    }
    input:focus {
      border-bottom: 2px solid blue;
      outline: 1px solid grey;
      outline-offset: 4px;
    }
    input:hover:not(:focus) {
      border-bottom: 2px solid grey; 
    }

    @media (prefers-reduced-motion) {
      input {
        transition: none;
      }
    }
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--badge-list-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
      <input type="text" id="getme" placeholder="Search Content, Topics, and People" />
      <badge-element></badge-element>
      <badge-element></badge-element>
      <badge-element></badge-element>
      <badge-element></badge-element>
      <badge-element></badge-element>
      <badge-element></badge-element>
      <badge-element></badge-element>
      <badge-element></badge-element>
      <badge-element></badge-element>
      <badge-element></badge-element>
      </main>
    `;
  }
}

customElements.define('badge-list', BadgeList);