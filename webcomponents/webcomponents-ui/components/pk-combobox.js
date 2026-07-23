
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

class PkCombobox extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['disabled','value','placeholder','open'];}
  #internals;#input;#list;#opts=[];#mo;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});this.#input=document.createElement('input');this.#input.autocomplete='off';this.#list=document.createElement('ul');this.#list.hidden=true;this.#input.addEventListener('input',()=>this._filter());this.#input.addEventListener('focus',()=>this._filter());this.#input.addEventListener('keydown',e=>{if(e.key==='Escape')this._open(false);});this.shadowRoot.append(this.#input,this.#list);this.shadowRoot.adoptedStyleSheets=[pkSheet(`:host{display:block;position:relative;}input{width:100%;padding:.5rem .65rem;border:1px solid var(--pk-border);border-radius:var(--pk-radius);}ul{position:absolute;left:0;right:0;top:100%;margin:.25rem 0 0;padding:.25rem;list-style:none;background:#fff;border:1px solid var(--pk-border);border-radius:var(--pk-radius);max-height:10rem;overflow:auto;z-index:20;}li{padding:.4rem .55rem;border-radius:4px;cursor:pointer;}li:hover{background:#ecfdf5;}`)];this.#mo=new MutationObserver(()=>this._read());}
  connectedCallback(){this._read();this.#mo.observe(this,{childList:true,subtree:true});this._doc=e=>{if(!this.contains(e.target))this._open(false);};document.addEventListener('click',this._doc);}
  disconnectedCallback(){this.#mo.disconnect();document.removeEventListener('click',this._doc);}
  attributeChangedCallback(n,o,v){if(n==='value'&&v!=null)this.#input.value=v;this.#input.disabled=this.hasAttribute('disabled');this.#input.placeholder=this.getAttribute('placeholder')||'';if(n==='open')this.#list.hidden=!this.hasAttribute('open');}
  _read(){this.#opts=[...this.querySelectorAll(':scope>option')].map(o=>({value:o.value??o.textContent.trim(),label:o.textContent.trim()}));this._filter();}
  _filter(){const q=this.#input.value.toLowerCase();const items=this.#opts.filter(o=>!q||o.label.toLowerCase().includes(q));this.#list.innerHTML='';items.forEach(o=>{const li=document.createElement('li');li.textContent=o.label;li.onmousedown=e=>{e.preventDefault();this.#input.value=o.label;this.setAttribute('value',o.value);this.#internals.setFormValue(o.value);this._open(false);this.dispatchEvent(new CustomEvent('pk-change',{bubbles:true,composed:true,detail:o}));};this.#list.append(li);});this._open(items.length>0);}
  _open(on){on?this.setAttribute('open',''):this.removeAttribute('open');}
}
customElements.define('pk-combobox',PkCombobox);
