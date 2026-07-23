
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

class PkButton extends HTMLElement {
  static get observedAttributes(){return['variant','size','disabled','type'];}
  constructor(){
    super();
    this.attachShadow({mode:'open',delegatesFocus:true});
    this._btn=document.createElement('button');
    this._btn.type='button';
    this._btn.append(document.createElement('slot'));
    this._btn.addEventListener('click',(e)=>{if(this.disabled){e.preventDefault();e.stopPropagation();return;}this.dispatchEvent(new CustomEvent('pk-click',{bubbles:true,composed:true}));});
    this.shadowRoot.append(this._btn);
    this.shadowRoot.adoptedStyleSheets=[pkSheet(`button{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;border-radius:var(--pk-radius);border:1px solid transparent;cursor:pointer;padding:.5rem 1rem;background:var(--pk-accent);color:#fff;font-weight:600;}button:disabled{opacity:.55;cursor:not-allowed;}button:hover:not(:disabled){background:var(--pk-accent-hover);}button:focus-visible{outline:none;box-shadow:var(--pk-focus);}:host([variant=outline]) button{background:transparent;color:var(--pk-accent);border-color:var(--pk-accent);}:host([variant=ghost]) button{background:transparent;color:var(--pk-accent);}:host([variant=danger]) button{background:#dc2626;}:host([size=sm]) button{padding:.35rem .65rem;font-size:.875rem;}:host([size=lg]) button{padding:.65rem 1.25rem;}`)];
  }
  connectedCallback(){this._sync();}
  attributeChangedCallback(){this._sync();}
  get disabled(){return this.hasAttribute('disabled');}
  set disabled(v){v?this.setAttribute('disabled',''):this.removeAttribute('disabled');this._sync();}
  _sync(){this._btn.disabled=this.disabled;this._btn.type=this.getAttribute('type')||'button';}
}
customElements.define('pk-button',PkButton);
