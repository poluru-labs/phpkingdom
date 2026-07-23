
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

class PkDropdownMenu extends HTMLElement {
  static get observedAttributes(){return['open'];}
  constructor(){super();this.attachShadow({mode:'open'});this._btn=document.createElement('button');this._btn.type='button';this._btn.textContent='Menu ';const ts=document.createElement('slot');ts.name='trigger';this._btn.append(ts);this._menu=document.createElement('div');this._menu.setAttribute('role','menu');const ms=document.createElement('slot');ms.name='menu';this._menu.append(ms);this._btn.addEventListener('click',e=>{e.stopPropagation();this.open=!this.open;});this.shadowRoot.append(this._btn,this._menu);this.shadowRoot.adoptedStyleSheets=[pkSheet(`:host{display:inline-block;position:relative;}button{background:var(--pk-accent);color:#fff;border:none;border-radius:var(--pk-radius);padding:.45rem .85rem;cursor:pointer;font-weight:600;}div[role=menu]{display:none;position:absolute;top:calc(100% + 4px);left:0;min-width:10rem;background:#fff;border:1px solid var(--pk-border);border-radius:var(--pk-radius);padding:.35rem;box-shadow:0 12px 28px rgba(15,23,42,.15);z-index:45;}:host([open]) div[role=menu]{display:block;}::slotted([role=menuitem]){display:block;width:100%;text-align:left;padding:.4rem .55rem;border:none;background:transparent;border-radius:4px;cursor:pointer;}::slotted([role=menuitem]:hover){background:#ecfdf5;}`)];this._doc=()=>this.open=false;}
  connectedCallback(){document.addEventListener('click',this._doc);}
  disconnectedCallback(){document.removeEventListener('click',this._doc);}
  get open(){return this.hasAttribute('open');}
  set open(v){v?this.setAttribute('open',''):this.removeAttribute('open');}
}
customElements.define('pk-dropdown-menu',PkDropdownMenu);
