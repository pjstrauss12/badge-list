import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
class Badge extends LitElement {
    static properties = {
      header: { type: String },
      name: {type: String,reflect: true},
      badge: {type: String},
      description: {type: String},
      link: {type: String},
      author: {type: String},
      time: {type: String},
      steps: {type: Array},
    }
  
    static get styles() {
      return css`

    .blankbadge {
      width: 1200px;
      border: 2px solid black;
      display: inline-flex;
      color: black;
      background-color: grey;
      margin-top: 20px;
          }
    
    .image {
      width: 100px;
      height: 100px;
      padding: 0px 15px 00px 0px;
          }
    
    .details {
       margin-top: 35px;
    }
    
    .name {
       padding: 33px 10px 0px 0px;
    }
    `;
  }

    constructor() {
      super();
      this.name = "BlankBadge";
      this.badge = 'save';
      this.description = 'Super cool HAX .com surch stuff';
      this.link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      this.author = 'YA BOI';
      this.time = '4:00';
      this.steps = [1,2,3];
    }
    render() {
      return html`
      <div class="blankbadge">
      <simple-icon class="image" icon="${this.badge}"></simple-icon>
      <div class="name">${this.name}</div>
        <details class="details">
          <summary></summary>
            <div>
              <ul>
                <li> ${this.description}</li>
                <li> <a href=${this.link}>${this.link}</li>
                <li> ${this.author}</li>
                <li> ${this.time}</li>
              </ul>
            </div>
            <div class="steps">${this.steps}</div>
       </div>`;
   }
}
  customElements.define('badge-element', Badge);