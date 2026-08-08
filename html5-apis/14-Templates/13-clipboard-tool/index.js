document.getElementById("copy").onclick = async () => {
  try { await navigator.clipboard.writeText(document.getElementById("t").value); document.getElementById("out").textContent = "copied"; }
  catch (e) { document.getElementById("out").textContent = e.message; }
};
document.getElementById("paste").onclick = async () => {
  try { document.getElementById("out").textContent = await navigator.clipboard.readText(); }
  catch (e) { document.getElementById("out").textContent = e.message; }
};
