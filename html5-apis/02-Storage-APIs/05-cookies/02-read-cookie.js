function getCookie(name) {
  return document.cookie.split("; ").find((r) => r.startsWith(name + "="))?.split("=")[1];
}
document.cookie = "theme=teal; path=/; SameSite=Lax";
document.getElementById("out").textContent = "theme=" + getCookie("theme");
