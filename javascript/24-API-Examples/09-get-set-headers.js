const headers = new Headers();
headers.set("Accept", "application/json");
headers.set("X-Request-Id", crypto.randomUUID ? crypto.randomUUID() : "req-1");
document.getElementById("out").textContent =
  "Accept=" + headers.get("Accept") + "\nX-Request-Id=" + headers.get("X-Request-Id");
