
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

class PkTextarea extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['placeholder','disabled','readonly','value','rows','required'];}
  #internals;#ta;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});this.#ta=document.createElement('textarea');this.#ta.addEventListener('input',()=>this._set(this.#ta.value));this.#ta.addEventListener('change',()=>this.dispatchEvent(new Event('change',{bubbles:true,composed:true})));this.shadowRoot.append(this.#ta);this.shadowRoot.adoptedStyleSheets=[pkSheet(`textarea{width:100%;min-height:5rem;padding:.5rem .65rem;border:1px solid var(--pk-border);border-radius:var(--pk-radius);resize:vertical;}`)];}
  connectedCallback(){this._sync();}
  attributeChangedCallback(n,o,v){if(n==='value')this.#ta.value=v??'';this._sync();}
  _sync(){this.#ta.placeholder=this.getAttribute('placeholder')||'';this.#ta.disabled=this.hasAttribute('disabled');this.#ta.readOnly=this.hasAttribute('readonly');this.#ta.required=this.hasAttribute('required');this.#ta.rows=Number(this.getAttribute('rows')||4);this.#internals.setFormValue(this.#ta.value);}
  _set(v){this.#ta.value=v;this.setAttribute('value',v);this.#internals.setFormValue(v);this.dispatchEvent(new Event('input',{bubbles:true,composed:true}));}
  get value(){return this.#ta.value;} set value(v){this._set(String(v));}
}
customElements.define('pk-textarea',PkTextarea);
