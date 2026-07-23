
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

class PkAutocomplete extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['value','placeholder','disabled'];}
  #internals;#input;#ul;#data=[];
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open',delegatesFocus:true});this.#input=document.createElement('input');this.#ul=document.createElement('ul');this.#ul.hidden=true;this.#input.addEventListener('input',()=>this._render());this.#input.addEventListener('focus',()=>this._render());this.shadowRoot.append(this.#input,this.#ul);this.shadowRoot.adoptedStyleSheets=[pkSheet(`:host{display:block;position:relative;}input{width:100%;padding:.5rem .65rem;border:1px solid var(--pk-border);border-radius:var(--pk-radius);}ul{position:absolute;left:0;right:0;top:100%;list-style:none;margin:.25rem 0 0;padding:.25rem;background:#fff;border:1px solid var(--pk-border);border-radius:var(--pk-radius);max-height:9rem;overflow:auto;z-index:30;}li{padding:.35rem .5rem;border-radius:4px;cursor:pointer;}li:hover{background:#ecfdf5;}`)];}
  connectedCallback(){this.#data=(this.getAttribute('suggestions')||'').split(',').map(s=>s.trim()).filter(Boolean);this._render();this._doc=e=>{if(!this.contains(e.target))this.#ul.hidden=true;};document.addEventListener('click',this._doc);}
  disconnectedCallback(){document.removeEventListener('click',this._doc);}
  attributeChangedCallback(n,o,v){if(n==='value'&&v!=null)this.#input.value=v;this.#input.disabled=this.hasAttribute('disabled');this.#input.placeholder=this.getAttribute('placeholder')||'';}
  _render(){const q=this.#input.value.toLowerCase();const items=this.#data.filter(s=>!q||s.toLowerCase().includes(q)).slice(0,8);this.#ul.innerHTML='';items.forEach(text=>{const li=document.createElement('li');li.textContent=text;li.onmousedown=ev=>{ev.preventDefault();this.#input.value=text;this.setAttribute('value',text);this.#internals.setFormValue(text);this.#ul.hidden=true;this.dispatchEvent(new CustomEvent('pk-select',{bubbles:true,composed:true,detail:{value:text}}));};this.#ul.append(li);});this.#ul.hidden=items.length===0;}
}
customElements.define('pk-autocomplete',PkAutocomplete);
