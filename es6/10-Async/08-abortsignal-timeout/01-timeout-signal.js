const s = (AbortSignal.timeout ? AbortSignal.timeout(1) : null); document.getElementById("out").textContent = s ? "AbortSignal.timeout available" : "polyfill/bundler needed";
