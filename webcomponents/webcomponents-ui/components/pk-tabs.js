
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

class PkTab extends HTMLElement { static get observedAttributes(){return['name','selected','label'];} }
class PkTabs extends HTMLElement {
  constructor(){super();this.attachShadow({mode:'open'});this._list=document.createElement('div');this._list.className='tabs';this._panels=document.createElement('div');this.shadowRoot.append(this._list,this._panels);this.shadowRoot.adoptedStyleSheets=[pkSheet(`.tabs{display:flex;gap:.35rem;border-bottom:1px solid var(--pk-border);margin-bottom:.75rem;}button.tab{padding:.45rem .85rem;border:none;background:transparent;border-bottom:2px solid transparent;cursor:pointer;font-weight:600;color:var(--pk-muted);}button.tab[aria-selected=true]{color:var(--pk-accent);border-bottom-color:var(--pk-accent);}.panel{display:none;}.panel[data-active]{display:block;}`)];}
  connectedCallback(){this._render();}
  _render(){const tabs=[...this.querySelectorAll(':scope>pk-tab')];this._list.innerHTML='';this._panels.innerHTML='';if(!tabs.length)return;let active=tabs.find(t=>t.hasAttribute('selected'))||tabs[0];tabs.forEach((tab,i)=>{const name=tab.getAttribute('name')||('tab'+i);const btn=document.createElement('button');btn.type='button';btn.className='tab';btn.textContent=tab.getAttribute('label')||name;btn.addEventListener('click',()=>this._select(name));this._list.append(btn);const panel=document.createElement('div');panel.className='panel';panel.dataset.name=name;[...tab.childNodes].forEach(n=>panel.append(n.cloneNode(true)));this._panels.append(panel);});this._select(active.getAttribute('name')||'tab0');}
  _select(name){[...this._list.children].forEach((btn,i)=>{const panel=this._panels.children[i];const on=panel.dataset.name===name;btn.setAttribute('aria-selected',on?'true':'false');panel.toggleAttribute('data-active',on);});this.dispatchEvent(new CustomEvent('pk-change',{bubbles:true,composed:true,detail:{name}}));}
}
customElements.define('pk-tab',PkTab);
customElements.define('pk-tabs',PkTabs);
