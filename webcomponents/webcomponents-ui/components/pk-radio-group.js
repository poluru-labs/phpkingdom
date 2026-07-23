
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

class PkRadioGroup extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['name','value','disabled','required'];}
  #internals;#wrap;#mo;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open'});this.#wrap=document.createElement('div');this.#wrap.setAttribute('role','radiogroup');this.shadowRoot.append(this.#wrap);this.shadowRoot.adoptedStyleSheets=[pkSheet(`div{display:flex;flex-direction:column;gap:.45rem;}label{display:flex;align-items:center;gap:.45rem;cursor:pointer;}input{accent-color:var(--pk-accent);}`)];this.#mo=new MutationObserver(()=>this._build());}
  connectedCallback(){this._build();this.#mo.observe(this,{childList:true,subtree:true});}
  disconnectedCallback(){this.#mo.disconnect();}
  attributeChangedCallback(){this._build();}
  _build(){this.#wrap.innerHTML='';const name=this.getAttribute('name')||'pk-radio';const val=this.getAttribute('value');this.querySelectorAll(':scope>option').forEach((opt,i)=>{const input=document.createElement('input');input.type='radio';input.name=name;input.value=opt.value??opt.textContent.trim();input.checked=val===input.value;input.disabled=this.hasAttribute('disabled');input.addEventListener('change',()=>{if(input.checked){this.setAttribute('value',input.value);this.#internals.setFormValue(input.value);this.dispatchEvent(new CustomEvent('pk-change',{bubbles:true,composed:true,detail:{value:input.value}}));}});const label=document.createElement('label');label.append(input,document.createTextNode(' '+opt.textContent.trim()));this.#wrap.append(label);});this.#internals.setFormValue(this.getAttribute('value'));}
}
customElements.define('pk-radio-group',PkRadioGroup);
