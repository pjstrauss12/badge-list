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
            width: 700px;
            border: 2px solid black;
            display: inline-flex;
            color: black;
            background-color:  rgb(227, 226, 225);
            padding: 0px 0px 0px 0px;
            }
          
          .image {
            width: 40px;
            height: 40px;
            padding: 0px 15px 0px 0px;
          }

          .time{
            padding: 0px 0px 0px 300px;
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
