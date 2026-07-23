
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

class PkDateRangePicker extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['from','to','disabled'];}
  #internals;#from;#to;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});const w=document.createElement('div');w.className='wrap';this.#from=document.createElement('input');this.#from.type='date';this.#to=document.createElement('input');this.#to.type='date';const emit=()=>{this.setAttribute('from',this.#from.value);this.setAttribute('to',this.#to.value);const fd=new FormData();fd.set('from',this.#from.value);fd.set('to',this.#to.value);this.#internals.setFormValue(fd);this.dispatchEvent(new CustomEvent('pk-change',{bubbles:true,composed:true,detail:{from:this.#from.value,to:this.#to.value}}));};this.#from.addEventListener('change',emit);this.#to.addEventListener('change',emit);w.append(this.#from,document.createTextNode(' – '),this.#to);this.shadowRoot.append(w);this.shadowRoot.adoptedStyleSheets=[pkSheet(`.wrap{display:flex;align-items:center;gap:.5rem;}input{flex:1;padding:.5rem .65rem;border:1px solid var(--pk-border);border-radius:var(--pk-radius);}`)];}
  connectedCallback(){this._sync();}
  attributeChangedCallback(){this._sync();}
  _sync(){if(this.hasAttribute('from'))this.#from.value=this.getAttribute('from');if(this.hasAttribute('to'))this.#to.value=this.getAttribute('to');const d=this.hasAttribute('disabled');this.#from.disabled=d;this.#to.disabled=d;}
}
customElements.define('pk-date-range-picker',PkDateRangePicker);
