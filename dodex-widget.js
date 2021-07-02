/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css, unsafeCSS, svg} from 'lit';

// Coins Dictionary
const coinsList = [
  {
    "id": "01coin",
    "symbol": "zoc",
    "name": "01coin",
    "platforms": {}
},
]

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Widget extends LitElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        border: solid 1px gray;
        padding: 20px;
        max-width: 800px;
        background-color: var(--dodoBackground);
        color: var(--dodoText);
        font-family: var(--dodoFontFamily) !important;
        position: relative;
      }

      .button {
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 10px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        color: rgb(0, 0, 0);
        background-color: var(--dodoPrimary);
        display: block;
        padding: 15px;
        font-size: 20px;
        width: 100%;
        height: auto;
        cursor: pointer;
        font-family: var(--dodoFontFamily) !important;
        border-radius: 10px;
      }

      .icon-button {
        fill: var(--dodoText);
        padding-left: 0px;
        padding-right: 0px;
        width: 36px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-left: 4px;
        background-color: rgb(38, 39, 41);
        background: rgb(38, 39, 41);
        color: rgb(255, 255, 255);
        font-size: 14px;
        border-radius: 10px;
        white-space: nowrap;
        height: 36px;
        appearance: none;
        cursor: pointer;
        border: none;
        outline: 0px;
        box-shadow: none;
        transition: background-color 250ms ease 0s, color 250ms ease 0s;
      }

      .icon-button:hover {
        border: none;
        outline: 0px;
        background: rgb(64, 62, 37);
        color: rgb(255, 232, 4);
        fill: var(--dodoPrimary) !important;
      }

      .top-bar {
        display: flex;
        justify-content: flex-end;
      }

      .field {
        margin-bottom: 10px
      }

      .field-label {
        flex: 1 1 0%;
        font-size: 14px;
        color: rgb(255, 255, 255);
        font-family: var(--dodoFontFamily) !important;
        margin-bottom: 5px;
      }

      .field-container {
        border-radius: 10px;
        border-style: solid;
        border-color: transparent;
        background: rgb(55, 55, 57);
        border-width: 1px;
        height: 58px;
        padding: 0px 16px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
      }

      .field-currency-container {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        padding-right: 10px;
        height: 100%;
      }

      .field-currency-info {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
      }

      .field-currency-icon {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }

      .field-currnecy-label {
        font-size: 16px;
        font-weight: 500;
      }

      .field-input {
        border: none;
        background: transparent;
        padding: 0px;
        outline: none;
        height: 58px;
        line-height: 58px;
        font-weight: 600;
        width: 0px;
        flex: 1 1 0%;
        min-width: 0px;
        color: white;
        font-size: 20px;
        margin-right: 10px;
        text-align: right;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},
      color: {type: String},
    };
  }

  constructor() {
    super();
    this.name = 'Widget';
    this.count = 0;
  }

  refreshButtonIcon() {
    return html`<svg
      class="button-icon"
      height="20px"
      viewBox="0 0 512 512"
      width="20px"
    >
      <path
        d="M384,352l96-109.3h-66.1C407.1,141.8,325,64,223.2,64C117.8,64,32,150.1,32,256s85.8,192,191.2,192  c43.1,0,83.8-14.1,117.7-40.7l7.5-5.9l-43.2-46.2l-6.2,4.6c-22.1,16.3-48.3,24.9-75.8,24.9C152.6,384.7,95.1,327,95.1,256  c0-71,57.5-128.7,128.1-128.7c66.4,0,120.7,50,127.4,115.3h-74.1L384,352z"
      />
    </svg>`;
  }

  shareButtonIcon() {
    return html` <svg
      class="button-icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
      ></path>
    </svg>`;
  }

  configButtonIcon() {
    return html`<svg
      class="button-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      style="width: 20px; height: 20px;"
    >
      <path
        id="形状"
        d="M10,20a1.8,1.8,0,0,1-1.756-1.312l-.125-.425a1.829,1.829,0,0,0-2.632-1.09l-.389.211a1.83,1.83,0,0,1-.883.233,1.855,1.855,0,0,1-1.578-.92,1.777,1.777,0,0,1-.022-1.8l.212-.388a1.831,1.831,0,0,0-1.09-2.632l-.426-.124a1.832,1.832,0,0,1,0-3.513l.426-.125a1.831,1.831,0,0,0,1.09-2.632L2.616,5.1A1.776,1.776,0,0,1,2.637,3.3a1.856,1.856,0,0,1,1.579-.921,1.833,1.833,0,0,1,.884.232l.387.212a1.837,1.837,0,0,0,.876.223A1.831,1.831,0,0,0,8.119,1.738l.125-.426a1.832,1.832,0,0,1,3.513,0l.124.426a1.831,1.831,0,0,0,2.632,1.09l.389-.211a1.83,1.83,0,0,1,.883-.233,1.855,1.855,0,0,1,1.578.92,1.779,1.779,0,0,1,.023,1.8l-.212.387a1.829,1.829,0,0,0,1.09,2.632l.425.125a1.832,1.832,0,0,1,0,3.513l-.425.124a1.829,1.829,0,0,0-1.09,2.632l.211.389a1.776,1.776,0,0,1-.021,1.795,1.857,1.857,0,0,1-1.579.921,1.832,1.832,0,0,1-.883-.232l-.388-.212a1.829,1.829,0,0,0-2.632,1.09l-.124.425A1.8,1.8,0,0,1,10,20ZM10,7a3,3,0,1,0,0,6h0a3,3,0,1,0,0-6Z"
        transform="translate(0 0)"
      ></path>
    </svg>`;
  }

  iconButton({icon}) {
    return html` <button class="icon-button">${icon}</button> `;
  }

  button({label}) {
    return html`<button class="button">${label}</button>`;
  }

  header() {
    return html`<div class="top-bar">
      ${this.iconButton({icon: this.refreshButtonIcon()})}
      ${this.iconButton({icon: this.shareButtonIcon()})}
      ${this.iconButton({icon: this.configButtonIcon()})}
    </div>`;
  }

  amountField({label, currency, currencyIcon}) {
    return html`
      <div class="field">
        <div class="field-label">${label}</div>
        <div class="field-container">
          <div class="field-currency-container">
            <div class="field-currency-info">
              <div class="field-currency-icon">${currencyIcon}</div>
              <div class="field-currency-label">${currency}</div>
            </div>
          </div>
          <input class="field-input" placeholder="0" />
        </div>
      </div>
    `;
  }

  mainScreen() {
    return html`
      <div></div>
      <div>
        ${this.amountField({
          label: 'Pay',
          currency: 'ETH',
          currencyIcon: this.refreshButtonIcon(),
        })}
      </div>
      <div>${this.button({label: 'Connect Wallet'})}</div>
    `;
  }

  render() {
    return html` ${this.header()} ${this.mainScreen()} `;
    return html`
      <p>Color is: ${this.color}</p>
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Counts: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('dodoex-widget', Widget);
