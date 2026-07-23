
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

class PkAccordionItem extends HTMLElement {
  static get observedAttributes(){return['open','title'];}
  connectedCallback(){if(this._built)return;this._built=true;const title=this.getAttribute('title')||'Section';const head=document.createElement('button');head.type='button';head.className='head';head.textContent=title;head.addEventListener('click',()=>this.toggleAttribute('open'));const body=document.createElement('div');body.className='body';body.append(document.createElement('slot'));this.append(head,body);}
}
class PkAccordion extends HTMLElement {
  constructor(){super();this.attachShadow({mode:'open'});this.shadowRoot.append(document.createElement('slot'));this.shadowRoot.adoptedStyleSheets=[pkSheet(`::slotted(pk-accordion-item){display:block;border:1px solid var(--pk-border);border-radius:var(--pk-radius);margin-bottom:.5rem;overflow:hidden;background:#fff;}::slotted(pk-accordion-item) .head{width:100%;text-align:left;padding:.65rem .85rem;border:none;background:#f8fafc;font-weight:600;cursor:pointer;}::slotted(pk-accordion-item) .body{padding:0 .85rem .85rem;display:none;}::slotted(pk-accordion-item[open]) .body{display:block;}`)];}
}
customElements.define('pk-accordion-item',PkAccordionItem);
customElements.define('pk-accordion',PkAccordion);
