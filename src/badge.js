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
    
    .details {
       margin-top: 21px;
    }
    
    h3 {
       padding: 0px 10px 0px 0px;
    }
    `;
  }

    constructor() {
      super();
      this.name = "BlankBadge";
      this.badge = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsOq0qlUMYbf6GrwFKPCYVIj1YIcMz8b5ag&usqp=CAU';
    }
    render() {
      return html`
      <div class="blankbadge">
      <img class="image" src="${this.imgurl}"/>
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
  customElements.define('badge', Badge);