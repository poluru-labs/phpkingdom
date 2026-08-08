document.getElementById("text").addEventListener("copy", (e) => {
  const selected = window.getSelection().toString();
  e.clipboardData.setData("text/plain", selected + " — via events demo");
  e.preventDefault();
  document.getElementById("out").textContent = "copied with suffix";
});
