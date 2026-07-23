
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

class PkDatePicker extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['value','disabled','required','min','max'];}
  #internals;#inp;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});this.#inp=document.createElement('input');this.#inp.type='date';this.#inp.addEventListener('change',()=>{this.setAttribute('value',this.#inp.value);this.#internals.setFormValue(this.#inp.value);this.dispatchEvent(new CustomEvent('pk-change',{bubbles:true,composed:true,detail:{value:this.#inp.value}}));});this.shadowRoot.append(this.#inp);this.shadowRoot.adoptedStyleSheets=[pkSheet(`input{width:100%;padding:.5rem .65rem;border:1px solid var(--pk-border);border-radius:var(--pk-radius);}`)];}
  connectedCallback(){this._sync();}
  attributeChangedCallback(){this._sync();}
  _sync(){if(this.hasAttribute('value'))this.#inp.value=this.getAttribute('value');this.#inp.disabled=this.hasAttribute('disabled');this.#inp.required=this.hasAttribute('required');if(this.hasAttribute('min'))this.#inp.min=this.getAttribute('min');if(this.hasAttribute('max'))this.#inp.max=this.getAttribute('max');this.#internals.setFormValue(this.#inp.value);}
}
customElements.define('pk-date-picker',PkDatePicker);
