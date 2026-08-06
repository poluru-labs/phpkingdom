document.getElementById("out").textContent = (typeof Iterator !== "undefined" && Iterator.prototype?.map) ? "helpers ok" : "polyfill/runtime needed";
