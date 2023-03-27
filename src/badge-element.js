import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
class Badge extends LitElement {
    static properties = {
      header: { type: String },
      name: {type: String,reflect: true},
      badge: {type: String},
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
    
    h3 {
       padding: 0px 10px 0px 0px;
    }
    `;
  }

    constructor() {
      super();
      this.name = "BlankBadge";
 //     this.badge = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsOq0qlUMYbf6GrwFKPCYVIj1YIcMz8b5ag&usqp=CAU';
      this.badge = 'star';
    }
    render() {
      return html`
      <div class="blankbadge">
      <simple-icon class="image" icon="${this.badge}"></simple-icon>
      <h3>${this.name}</h3>
        <details class="details">
          <summary></summary>
            <div>
              <ul>
                <li> Stuff goes in here</li>
              </ul>
            </div>
       </div>`;
   }
}
  customElements.define('badge-element', Badge);