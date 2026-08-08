document.getElementById("out").textContent =
  "PublicKeyCredential: " + (typeof PublicKeyCredential) +
  "\ncredentials: " + ("credentials" in navigator);
