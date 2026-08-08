document.getElementById("out").textContent = [
  "1. No secrets in client bundles",
  "2. Escape untrusted HTML (textContent / sanitize)",
  "3. Handle fetch !ok + AbortController timeouts",
  "4. Remove debug logs; source maps only in staging",
  "5. Test keyboard a11y and reduced-motion paths",
  "6. Cache strategy + error boundaries for UI"
].join("\n");
