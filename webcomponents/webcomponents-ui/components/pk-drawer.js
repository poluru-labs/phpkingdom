
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

class PkDrawer extends HTMLElement {
  static get observedAttributes(){return['open','side'];}
  constructor(){super();this.attachShadow({mode:'open'});this._backdrop=document.createElement('div');this._backdrop.className='backdrop';this._panel=document.createElement('aside');this._panel.append(document.createElement('slot'));this.shadowRoot.append(this._backdrop,this._panel);this.shadowRoot.adoptedStyleSheets=[pkSheet(`:host{position:fixed;inset:0;z-index:900;display:none;}:host([open]){display:block;}.backdrop{position:absolute;inset:0;background:rgba(15,23,42,.4);}aside{position:absolute;top:0;bottom:0;width:min(320px,88vw);background:#fff;padding:1rem;box-shadow:0 0 40px rgba(15,23,42,.2);transition:transform .2s;}:host([side=left]) aside{left:0;transform:translateX(-105%);}:host([side=left][open]) aside{transform:none;}:host([side=right]) aside{right:0;transform:translateX(105%);}:host([side=right][open]) aside{transform:none;}`)];this._esc=e=>{if(e.key==='Escape'&&this.open)this.open=false;};}
  connectedCallback(){if(!this.hasAttribute('side'))this.setAttribute('side','right');document.addEventListener('keydown',this._esc);this._backdrop.addEventListener('click',()=>this.open=false);}
  disconnectedCallback(){document.removeEventListener('keydown',this._esc);}
  get open(){return this.hasAttribute('open');}
  set open(v){v?this.setAttribute('open',''):this.removeAttribute('open');this.dispatchEvent(new CustomEvent('pk-open-change',{bubbles:true,composed:true,detail:{open:v}}));}
}
customElements.define('pk-drawer',PkDrawer);
