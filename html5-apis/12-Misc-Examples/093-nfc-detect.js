document.getElementById("out").textContent = String(!!navigator.nfc || !!('NDEFReader' in window));
