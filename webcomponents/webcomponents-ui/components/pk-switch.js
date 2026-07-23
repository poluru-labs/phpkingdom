
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

class PkSwitch extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['checked','disabled'];}
  #internals;#btn;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});this.#btn=document.createElement('button');this.#btn.type='button';this.#btn.setAttribute('role','switch');this.#btn.addEventListener('click',()=>{if(this.hasAttribute('disabled'))return;this.checked=!this.checked;});this.shadowRoot.append(this.#btn);this.shadowRoot.adoptedStyleSheets=[pkSheet(`button{width:2.75rem;height:1.5rem;border-radius:999px;border:none;background:#cbd5e1;position:relative;cursor:pointer;padding:0;}button::after{content:'';position:absolute;top:2px;left:2px;width:1.1rem;height:1.1rem;border-radius:50%;background:#fff;transition:transform .15s;}:host([checked]) button{background:var(--pk-accent);}:host([checked]) button::after{transform:translateX(1.2rem);}button:focus-visible{outline:none;box-shadow:var(--pk-focus);}`)];}
  connectedCallback(){this._sync();}
  attributeChangedCallback(){this._sync();}
  _sync(){this.#btn.setAttribute('aria-checked',this.hasAttribute('checked')?'true':'false');this.#btn.disabled=this.hasAttribute('disabled');this.#internals.setFormValue(this.hasAttribute('checked')?'on':null);}
  get checked(){return this.hasAttribute('checked');}
  set checked(v){v?this.setAttribute('checked',''):this.removeAttribute('checked');this.#internals.setFormValue(v?'on':null);this.dispatchEvent(new CustomEvent('pk-change',{bubbles:true,composed:true,detail:{checked:v}}));this._sync();}
}
customElements.define('pk-switch',PkSwitch);
