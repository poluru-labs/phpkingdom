
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

class PkPopover extends HTMLElement {
  static get observedAttributes(){return['open'];}
  constructor(){super();this.attachShadow({mode:'open'});this._btn=document.createElement('button');this._btn.type='button';const ts=document.createElement('slot');ts.name='trigger';this._btn.append(ts);this._panel=document.createElement('div');this._panel.className='panel';this._panel.append(document.createElement('slot'));this._btn.addEventListener('click',()=>this.open=!this.open);this.shadowRoot.append(this._btn,this._panel);this.shadowRoot.adoptedStyleSheets=[pkSheet(`:host{display:inline-block;position:relative;}button{border:1px solid var(--pk-border);background:#fff;border-radius:var(--pk-radius);padding:.45rem .75rem;cursor:pointer;}.panel{display:none;position:absolute;top:calc(100% + 6px);left:0;min-width:10rem;background:#fff;border:1px solid var(--pk-border);border-radius:var(--pk-radius);padding:.5rem;box-shadow:0 10px 30px rgba(15,23,42,.12);z-index:40;}:host([open]) .panel{display:block;}`)];this._doc=e=>{if(!this.contains(e.target))this.open=false;};}
  connectedCallback(){document.addEventListener('click',this._doc);}
  disconnectedCallback(){document.removeEventListener('click',this._doc);}
  get open(){return this.hasAttribute('open');}
  set open(v){v?this.setAttribute('open',''):this.removeAttribute('open');this.dispatchEvent(new CustomEvent('pk-open-change',{bubbles:true,composed:true,detail:{open:v}}));}
}
customElements.define('pk-popover',PkPopover);
