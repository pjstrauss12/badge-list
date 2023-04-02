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
        border: 1px solid rgb(56, 137, 181);
        border-left: 30px solid rgb(56, 137, 181);
        border-radius: 5px;
        width: 1000px;
        text-align: left;
        font-family: "effra", sans-serif;
        margin: 10px;
        display: flex;
        align-items: center;
        background-color: rgb(202, 233, 250);
      }
      
      .image-name-container {
        display: flex;
        align-items: center;
      }
      
      .image {
        width: 80px;
        height: 80px;
        padding: 0px 15px 0px 0px;
      }
      
      .name {
        font-size: 24px;
        font-weight: bold;
        padding: 0px 15px 0px 0px;
      }
      
      .details-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
      }
      
      .description {
        grid-column: 1 / 4;
        padding: 10px;
      }
      
      .link {
        padding: 10px;
      }
      
      .author {
        padding: 10px;
      }
      
      .steplist {
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
          <div class="image-name-container">
            <simple-icon class="image" icon="${this.badge}"></simple-icon>
            <div class="name">${this.name}</div>
          </div>
          <div class="details-container">
            <details class="details">
              <summary></summary>
              <div class="description">${this.description}</div>
              <div class="link">
                <a href="${this.link}">${this.linkName}</a>
              </div>
              <div class="author">${this.author}</div>
              <div class="steplist">${this.steps}</div>
            </details>
          </div>
        </div>
      `;
    }
}
  customElements.define('badge-element', Badge);