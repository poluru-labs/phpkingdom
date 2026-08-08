sessionStorage.setItem("tabId", String(Date.now()));
document.getElementById("out").textContent =
  "tabId = " + sessionStorage.getItem("tabId");
