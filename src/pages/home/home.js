import { html, LitElement } from '@polymer/lit-element';
import css from './layout.css';

class HomePageComponent extends LitElement {
  render() {
    return html`
      <style>
        ${css}
      </style>

      <div class="container">
        <h1>Home</h1>
      </div>
    `;
  }
}

customElements.define('home-page', HomePageComponent);
