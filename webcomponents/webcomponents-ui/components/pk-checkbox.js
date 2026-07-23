
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

class PkCheckbox extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['checked','disabled','value','required'];}
  #internals;#cb;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});this.#cb=document.createElement('input');this.#cb.type='checkbox';const label=document.createElement('label');label.append(this.#cb,document.createElement('slot'));this.#cb.addEventListener('change',()=>{this.toggleAttribute('checked',this.#cb.checked);this.#internals.setFormValue(this.#cb.checked?this.getAttribute('value')||'on':null);this.dispatchEvent(new CustomEvent('pk-change',{bubbles:true,composed:true,detail:{checked:this.#cb.checked}}));});this.shadowRoot.append(label);this.shadowRoot.adoptedStyleSheets=[pkSheet(`label{display:inline-flex;align-items:center;gap:.5rem;cursor:pointer;}input{width:1rem;height:1rem;accent-color:var(--pk-accent);}`)];}
  connectedCallback(){this._sync();}
  attributeChangedCallback(){this._sync();}
  _sync(){this.#cb.checked=this.hasAttribute('checked');this.#cb.disabled=this.hasAttribute('disabled');this.#cb.required=this.hasAttribute('required');}
  get checked(){return this.hasAttribute('checked');} set checked(v){v?this.setAttribute('checked',''):this.removeAttribute('checked');this._sync();}
}
customElements.define('pk-checkbox',PkCheckbox);
