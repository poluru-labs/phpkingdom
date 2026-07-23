
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

class PkTooltip extends HTMLElement {
  static get observedAttributes(){return['text','placement'];}
  constructor(){super();this.attachShadow({mode:'open'});const t=document.createElement('span');t.className='trigger';t.append(document.createElement('slot'));this._tip=document.createElement('span');this._tip.className='tip';this._tip.setAttribute('role','tooltip');this.shadowRoot.append(t,this._tip);this.shadowRoot.adoptedStyleSheets=[pkSheet(`:host{position:relative;display:inline-block;}.tip{position:absolute;z-index:50;background:#0f172a;color:#f8fafc;font-size:.75rem;padding:.35rem .55rem;border-radius:4px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .12s;}:host([placement=bottom]) .tip{top:calc(100% + 6px);left:50%;transform:translateX(-50%);}:host([placement=top]) .tip{bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);}:host([data-show]) .tip{opacity:1;}`)];this._show=()=>this.setAttribute('data-show','');this._hide=()=>this.removeAttribute('data-show');}
  connectedCallback(){if(!this.hasAttribute('placement'))this.setAttribute('placement','top');this._tip.textContent=this.getAttribute('text')||'';this.addEventListener('mouseenter',this._show);this.addEventListener('mouseleave',this._hide);this.addEventListener('focusin',this._show);this.addEventListener('focusout',this._hide);}
  attributeChangedCallback(){this._tip.textContent=this.getAttribute('text')||'';}
}
customElements.define('pk-tooltip',PkTooltip);
