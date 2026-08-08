document.getElementById("out").textContent =
  "PublicKeyCredential: " + (typeof PublicKeyCredential !== "undefined") +
  "\ncredentials: " + !!navigator.credentials;
