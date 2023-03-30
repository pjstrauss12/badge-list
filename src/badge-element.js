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
      linkName: {type: String},
      author: {type: String},
      time: {type: String},
      steps: {type: Array},
    }
  
    static get styles() {
      return css`

    .blankbadge {
      border: 1px solid blue;
      border-left: 15px solid blue;
      border-radius: 5px;
      width: 1000px;
      text-align: left;
      font-family: "effra", sans-serif;
      margin: 10px;
      }
    
    .image {
      width: 100px;
      height: 100px;
      padding: 0px 15px 00px 0px;
          }
    
    .details {
       margin-top: 35px;
    }
    
    /* .name {
       padding: 33px 10px 0px 0px;
    } */
    .description{
      padding: 10px;
    }
    .link{
      padding: 10px;
    }
    .author{
      padding: 10px;
    }
    .steplist{
      padding: 10px;
    }
    `;
  }

    constructor() {
      super();
      this.name = "Amazon";
      this.badge = 'save';
      this.description = 'Super cool HAX .com surch stuff';
      this.link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      this.linkName = "This link goes somewhere";
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
          <div class="description">
          ${this.description}
          </div>
          <div class="link">
            <a href="${this.link}">${this.linkName}</a>
          </div>
          <div class="author">
            ${this.author}
          </div>
          <div class="steplist">
            ${this.steps}
          </div>
    </details>
            
       </div>`;
   }
}
  customElements.define('badge-element', Badge);