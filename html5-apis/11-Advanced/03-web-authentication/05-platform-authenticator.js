document.getElementById("go").onclick = async () => {
  if (!window.PublicKeyCredential?.isUserVerifyingPlatformAuthenticatorAvailable) {
    document.getElementById("out").textContent = "API missing";
    return;
  }
  const ok = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
  document.getElementById("out").textContent = "platform UVAA=" + ok;
};
