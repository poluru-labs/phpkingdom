
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

class PkPagination extends HTMLElement {
  static get observedAttributes(){return['page','total','per-page'];}
  constructor(){super();this.attachShadow({mode:'open'});this._wrap=document.createElement('div');this.shadowRoot.append(this._wrap);this.shadowRoot.adoptedStyleSheets=[pkSheet(`div{display:flex;align-items:center;gap:.35rem;flex-wrap:wrap;}button{min-width:2rem;padding:.35rem .55rem;border:1px solid var(--pk-border);background:#fff;border-radius:var(--pk-radius);cursor:pointer;}button[aria-current=page]{background:var(--pk-accent);color:#fff;border-color:var(--pk-accent);}button:disabled{opacity:.45;cursor:not-allowed;}`)];}
  connectedCallback(){this._render();}
  attributeChangedCallback(){this._render();}
  _pages(){const total=Math.max(1,Number(this.getAttribute('total')||1));const per=Math.max(1,Number(this.getAttribute('per-page')||10));return Math.max(1,Math.ceil(total/per));}
  _render(){const page=Number(this.getAttribute('page')||1);const pages=this._pages();this._wrap.innerHTML='';const mk=(label,p,dis=false,cur=false)=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.disabled=dis;if(cur)b.setAttribute('aria-current','page');b.addEventListener('click',()=>this._go(p));return b;};this._wrap.append(mk('Prev',page-1,page<=1));for(let i=1;i<=pages;i++){if(pages>7&&Math.abs(i-page)>2&&i!==1&&i!==pages)continue;this._wrap.append(mk(String(i),i,false,i===page));}this._wrap.append(mk('Next',page+1,page>=pages));}
  _go(p){const pages=this._pages();const next=Math.min(pages,Math.max(1,p));this.setAttribute('page',String(next));this.dispatchEvent(new CustomEvent('pk-change',{bubbles:true,composed:true,detail:{page:next,pages}}));this._render();}
}
customElements.define('pk-pagination',PkPagination);
