import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
class Steps extends LitElement {
    static properties = { 
        statment: {type: String,reflect: true},
        icon: {type: String},
        worktime: {type: String},
    }

    static get styles() {
        return css`
        .blanksteps {
            width: 600px;
            border: 2px solid black;
            display: inline-flex;
            color: black;
            background-color: grey;
                }
          
          .image {
            width: 60px;
            height: 60px;
            padding: 0px 15px 00px 0px;
          }

          .time{
            padding: 0px 0px 0px 0px;
          }
          
        `;
  }

  constructor() {
    super();
    this.statment = "Blank";
    this.icon = "save";
    this.worktime= "4:00"
  }

  render() {
    return html`
    <div class="blanksteps">
    <simple-icon class="image" icon=${this.icon}></simple-icon>
    <div class="statment">${this.statment}</div>
    <div class ="time">${this.worktime}</div>
  </div>
    `;
    }
}
  customElements.define('steps-too', Steps);
