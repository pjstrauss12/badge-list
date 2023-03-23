import { LitElement, html, css } from 'lit';
class Badge extends LitElement {
    static properties = {
      header: { type: String },
    }
  
    static styles = css`

    .badges {
      width: 600px;
      border: 2px solid black;
      display: inline-flex;
      color: black;
      background-color: grey;
    }
`
    render() {
      return html`
    <div class="badges">
    <h3>The title </h3>
    <summary>INFO</summary>
    <div>
      <ul>
       <li> Stuff goes in here</li>
      </ul>
    </div>`;
   }
}
  customElements.define('badge', Badge);