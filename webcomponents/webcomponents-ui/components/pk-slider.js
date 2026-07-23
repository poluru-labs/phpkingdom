
const PK = `
:host {
  --pk-accent: #0f766e;
  --pk-accent-hover: #0d9488;
  --pk-border: #cbd5e1;
  --pk-radius: 6px;
  --pk-text: #0f172a;
  --pk-muted: #64748b;
  --pk-bg: #ffffff;
  --pk-focus: 0 0 0 3px rgba(15, 118, 110, 0.35);
  font-family: system-ui, -apple-system, sans-serif;
  color: var(--pk-text);
}
*, *::before, *::after { box-sizing: border-box; }
button, input, textarea, select { font: inherit; }
`;

function pkSheet(extra = '') {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(PK + extra);
  return sheet;
}

class PkSlider extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['min','max','step','value','disabled'];}
  #internals;#range;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});this.#range=document.createElement('input');this.#range.type='range';this.#range.addEventListener('input',()=>{this.setAttribute('value',this.#range.value);this.#internals.setFormValue(this.#range.value);this.dispatchEvent(new CustomEvent('pk-input',{bubbles:true,composed:true,detail:{value:this.#range.value}}));});this.shadowRoot.append(this.#range);this.shadowRoot.adoptedStyleSheets=[pkSheet(`input{width:100%;accent-color:var(--pk-accent);}`)];}
  connectedCallback(){this._sync();}
  attributeChangedCallback(){this._sync();}
  _sync(){this.#range.min=this.getAttribute('min')||'0';this.#range.max=this.getAttribute('max')||'100';this.#range.step=this.getAttribute('step')||'1';if(this.hasAttribute('value'))this.#range.value=this.getAttribute('value');this.#range.disabled=this.hasAttribute('disabled');this.#internals.setFormValue(this.#range.value);}
}
customElements.define('pk-slider',PkSlider);
