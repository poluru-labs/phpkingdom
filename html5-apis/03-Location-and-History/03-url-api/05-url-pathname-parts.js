const u = new URL(location.href);
document.getElementById("out").textContent =
  "origin=" + u.origin + "\npathname=" + u.pathname +
  "\nparts=" + JSON.stringify(u.pathname.split("/").filter(Boolean));
