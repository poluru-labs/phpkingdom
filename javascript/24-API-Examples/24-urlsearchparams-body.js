const body = new URLSearchParams({
  username: "ada",
  newsletter: "yes"
});
document.getElementById("out").textContent = body.toString();
// fetch("/api/subscribe", {
//   method: "POST",
//   headers: { "Content-Type": "application/x-www-form-urlencoded" },
//   body
// })
