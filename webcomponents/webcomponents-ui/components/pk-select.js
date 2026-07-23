
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

class PkSelect extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['disabled','value','placeholder','required'];}
  #internals;#sel;#mo;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});this.#sel=document.createElement('select');this.#sel.addEventListener('change',()=>{this.setAttribute('value',this.#sel.value);this.#internals.setFormValue(this.#sel.value);this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));});this.shadowRoot.append(this.#sel);this.shadowRoot.adoptedStyleSheets=[pkSheet(`select{width:100%;padding:.5rem .65rem;border:1px solid var(--pk-border);border-radius:var(--pk-radius);}`)];this.#mo=new MutationObserver(()=>this._refresh());}
  connectedCallback(){this._refresh();this.#mo.observe(this,{childList:true,subtree:true});}
  disconnectedCallback(){this.#mo.disconnect();}
  attributeChangedCallback(){this._sync();this.#sel.disabled=this.hasAttribute('disabled');this.#sel.required=this.hasAttribute('required');}
  _refresh(){const ph=this.getAttribute('placeholder');this.#sel.innerHTML='';if(ph){const o=document.createElement('option');o.value='';o.textContent=ph;o.disabled=true;this.#sel.append(o);}this.querySelectorAll(':scope>option').forEach(opt=>{const o=document.createElement('option');o.value=opt.value??opt.textContent.trim();o.textContent=opt.textContent;this.#sel.append(o);});this._sync();}
  _sync(){const v=this.getAttribute('value');if(v!=null)this.#sel.value=v;this.#internals.setFormValue(this.#sel.value);}
  get value(){return this.#sel.value;} set value(v){this.setAttribute('value',v);this._sync();}
}
customElements.define('pk-select',PkSelect);
