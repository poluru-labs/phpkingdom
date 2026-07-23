
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

class PkModal extends HTMLElement {
  static get observedAttributes(){return['open'];}
  constructor(){super();this.attachShadow({mode:'open'});this._backdrop=document.createElement('div');this._backdrop.className='backdrop';this._dialog=document.createElement('div');this._dialog.className='dialog';this._dialog.setAttribute('role','dialog');this._dialog.setAttribute('aria-modal','true');const close=document.createElement('button');close.type='button';close.className='close';close.textContent='×';close.addEventListener('click',()=>this.open=false);const th=document.createElement('header');th.append(Object.assign(document.createElement('slot'),{name:'title'}));const body=document.createElement('slot');body.name='body';this._dialog.append(close,th,body);this.shadowRoot.append(this._backdrop,this._dialog);this.shadowRoot.adoptedStyleSheets=[pkSheet(`:host{position:fixed;inset:0;z-index:1000;display:none;align-items:center;justify-content:center;}:host([open]){display:flex;}.backdrop{position:absolute;inset:0;background:rgba(15,23,42,.45);}.dialog{position:relative;background:#fff;border-radius:10px;padding:1rem 1.25rem;min-width:min(420px,92vw);box-shadow:0 20px 50px rgba(15,23,42,.25);}header{font-weight:700;margin-bottom:.75rem;padding-right:1.5rem;}.close{position:absolute;top:.5rem;right:.5rem;border:none;background:transparent;font-size:1.4rem;cursor:pointer;}`)];this._onKey=e=>{if(e.key==='Escape'&&this.open){this.open=false;e.preventDefault();}};}
  connectedCallback(){document.addEventListener('keydown',this._onKey);this._backdrop.addEventListener('click',()=>this.open=false);}
  disconnectedCallback(){document.removeEventListener('keydown',this._onKey);}
  get open(){return this.hasAttribute('open');}
  set open(v){v?this.setAttribute('open',''):this.removeAttribute('open');this.dispatchEvent(new CustomEvent('pk-open-change',{bubbles:true,composed:true,detail:{open:v}}));}
}
customElements.define('pk-modal',PkModal);
