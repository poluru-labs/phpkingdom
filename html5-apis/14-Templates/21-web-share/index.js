document.getElementById("go").onclick = async () => {
  if (!navigator.share) { document.getElementById("out").textContent = "unsupported"; return; }
  try { await navigator.share({ title: "HTML5 APIs", url: location.href }); document.getElementById("out").textContent = "ok"; }
  catch (e) { document.getElementById("out").textContent = e.message; }
};
