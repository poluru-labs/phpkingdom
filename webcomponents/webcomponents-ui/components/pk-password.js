
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

class PkPassword extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['value','placeholder','disabled','required'];}
  #internals;#input;#toggle;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});const w=document.createElement('div');this.#input=document.createElement('input');this.#input.type='password';this.#toggle=document.createElement('button');this.#toggle.type='button';this.#toggle.textContent='Show';this.#toggle.addEventListener('click',()=>{const s=this.#input.type==='password';this.#input.type=s?'text':'password';this.#toggle.textContent=s?'Hide':'Show';});this.#input.addEventListener('input',()=>{this.setAttribute('value',this.#input.value);this.#internals.setFormValue(this.#input.value);this.dispatchEvent(new Event('input',{bubbles:true,composed:true}));});w.append(this.#input,this.#toggle);this.shadowRoot.append(w);this.shadowRoot.adoptedStyleSheets=[pkSheet(`div{display:flex;border:1px solid var(--pk-border);border-radius:var(--pk-radius);overflow:hidden;}input{flex:1;border:none;padding:.5rem .65rem;}button{border:none;background:#f1f5f9;padding:0 .75rem;cursor:pointer;color:var(--pk-accent);font-weight:600;}`)];}
  connectedCallback(){this._sync();}
  attributeChangedCallback(){this._sync();}
  _sync(){if(this.hasAttribute('value'))this.#input.value=this.getAttribute('value');this.#input.placeholder=this.getAttribute('placeholder')||'';this.#input.disabled=this.hasAttribute('disabled');this.#input.required=this.hasAttribute('required');}
}
customElements.define('pk-password',PkPassword);
