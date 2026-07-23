
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

class PkContextMenu extends HTMLElement {
  constructor(){super();this.attachShadow({mode:'open'});this._area=document.createElement('div');this._area.className='area';this._area.append(document.createElement('slot'));this._menu=document.createElement('div');this._menu.className='menu';this._menu.hidden=true;const ms=document.createElement('slot');ms.name='menu';this._menu.append(ms);this.shadowRoot.append(this._area,this._menu);this.shadowRoot.adoptedStyleSheets=[pkSheet(`.area{min-height:120px;border:1px dashed var(--pk-border);border-radius:var(--pk-radius);padding:1rem;background:#fff;}.menu{position:fixed;z-index:80;background:#fff;border:1px solid var(--pk-border);border-radius:var(--pk-radius);padding:.35rem;box-shadow:0 12px 28px rgba(15,23,42,.18);min-width:9rem;}::slotted([role=menuitem]){display:block;width:100%;padding:.4rem .55rem;border:none;background:transparent;text-align:left;border-radius:4px;cursor:pointer;}::slotted([role=menuitem]:hover){background:#ecfdf5;}`)];this._hide=()=>{this._menu.hidden=true;};}
  connectedCallback(){this._area.addEventListener('contextmenu',e=>{e.preventDefault();this._menu.style.left=e.clientX+'px';this._menu.style.top=e.clientY+'px';this._menu.hidden=false;this.dispatchEvent(new CustomEvent('pk-open',{bubbles:true,composed:true}));});document.addEventListener('click',this._hide);document.addEventListener('scroll',this._hide,true);}
  disconnectedCallback(){document.removeEventListener('click',this._hide);document.removeEventListener('scroll',this._hide,true);}
}
customElements.define('pk-context-menu',PkContextMenu);
