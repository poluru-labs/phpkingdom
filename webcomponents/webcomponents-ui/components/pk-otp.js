
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

class PkOtp extends HTMLElement {
  static formAssociated=true;
  static get observedAttributes(){return['length','value','disabled'];}
  #internals;#inputs=[];#len=6;#wrap;
  constructor(){super();this.#internals=this.attachInternals();this.attachShadow({mode:'open'});this.#wrap=document.createElement('div');this.shadowRoot.append(this.#wrap);this.shadowRoot.adoptedStyleSheets=[pkSheet(`div{display:flex;gap:.5rem;}input{width:2.25rem;height:2.5rem;text-align:center;font-size:1.1rem;border:1px solid var(--pk-border);border-radius:var(--pk-radius);}input:focus{outline:none;box-shadow:var(--pk-focus);border-color:var(--pk-accent);}`)];}
  connectedCallback(){this.#len=Number(this.getAttribute('length')||6);this._build();}
  attributeChangedCallback(n){if(n==='length'){this.#len=Number(this.getAttribute('length')||6);this._build();}if(n==='value'&&this.hasAttribute('value'))this._fill(this.getAttribute('value'));}
  _build(){this.#wrap.innerHTML='';this.#inputs=[];for(let i=0;i<this.#len;i++){const inp=document.createElement('input');inp.inputMode='numeric';inp.maxLength=1;inp.addEventListener('input',()=>{inp.value=inp.value.replace(/\D/g,'').slice(0,1);if(inp.value&&inp.nextElementSibling)inp.nextElementSibling.focus();this._emit();});inp.addEventListener('keydown',e=>{if(e.key==='Backspace'&&!inp.value&&inp.previousElementSibling)inp.previousElementSibling.focus();});inp.addEventListener('paste',e=>{e.preventDefault();const t=(e.clipboardData.getData('text')||'').replace(/\D/g,'').slice(0,this.#len);this._fill(t);this._emit();});this.#wrap.append(inp);this.#inputs.push(inp);}if(this.hasAttribute('disabled'))this.#inputs.forEach(i=>i.disabled=true);}
  _fill(v){this.#inputs.forEach((inp,i)=>inp.value=v[i]||'');}
  _emit(){const v=this.#inputs.map(i=>i.value).join('');this.setAttribute('value',v);this.#internals.setFormValue(v);this.dispatchEvent(new CustomEvent('pk-change',{bubbles:true,composed:true,detail:{value:v}}));}
  get value(){return this.#inputs.map(i=>i.value).join('');}
}
customElements.define('pk-otp',PkOtp);
