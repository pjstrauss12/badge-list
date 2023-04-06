import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "./badge-element.js";
import "./steps-too.js";

class BadgeList extends LitElement {
  static properties = {
    header: { type: String },
    badges: {type: Array}
  }

  static styles = css`

    
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
    this.header = 'Badges';
    this.badges = [];
    this.updateBadges();
  }
  updateBadges(){
    const address = '../api/badges';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        });
}

  render() {
    return html`
      <main>
        <h3>${this.header}</h3>
        <div class="wrapper">
            ${this.badges.map(thing => html`
            <div class="item">
                <badge-element name="${thing.name}" 
                badge="${thing.badge}" 
                description="${thing.description}" 
                link="${thing.link}" 
                linkName="${thing.linkName}" 
                author="${thing.author}" 
                time="${thing.time}" 
                steps="${thing.steps}">
              </badge-element>
              </div>
              `)}
            </div>
      </main>
    `;
  }
}

customElements.define('badge-list', BadgeList);