
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

class PkBreadcrumb extends HTMLElement {
  constructor(){super();this.attachShadow({mode:'open'});const nav=document.createElement('nav');nav.setAttribute('aria-label','Breadcrumb');nav.append(document.createElement('slot'));this.shadowRoot.append(nav);this.shadowRoot.adoptedStyleSheets=[pkSheet(`nav{display:flex;flex-wrap:wrap;gap:.35rem;align-items:center;font-size:.925rem;}::slotted(a){color:var(--pk-accent);text-decoration:none;}::slotted(span){color:var(--pk-muted);}::slotted(*:not(:last-child))::after{content:'/';margin-left:.35rem;color:var(--pk-muted);}`)];}
}
customElements.define('pk-breadcrumb',PkBreadcrumb);
