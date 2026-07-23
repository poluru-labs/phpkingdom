
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

class PkInput extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['type','placeholder','disabled','readonly','value','required'];}
  #internals;#input;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});this.#input=document.createElement('input');this.#input.addEventListener('input',()=>this._set(this.#input.value));this.#input.addEventListener('change',()=>this.dispatchEvent(new Event('change',{bubbles:true,composed:true})));this.shadowRoot.append(this.#input);this.shadowRoot.adoptedStyleSheets=[pkSheet(`input{width:100%;padding:.5rem .65rem;border:1px solid var(--pk-border);border-radius:var(--pk-radius);}input:focus{outline:none;box-shadow:var(--pk-focus);border-color:var(--pk-accent);}`)];}
  connectedCallback(){this._sync();}
  attributeChangedCallback(n,o,v){if(n==='value'&&o!==v)this.#input.value=v??'';this._sync();}
  _sync(){this.#input.type=this.getAttribute('type')||'text';this.#input.placeholder=this.getAttribute('placeholder')||'';this.#input.disabled=this.hasAttribute('disabled');this.#input.readOnly=this.hasAttribute('readonly');this.#input.required=this.hasAttribute('required');if(this.hasAttribute('value'))this.#input.value=this.getAttribute('value');this.#internals.setFormValue(this.#input.value);}
  _set(v){this.#input.value=v;this.setAttribute('value',v);this.#internals.setFormValue(v);this.dispatchEvent(new Event('input',{bubbles:true,composed:true}));}
  get value(){return this.#input.value;} set value(v){this._set(String(v));}
}
customElements.define('pk-input',PkInput);
