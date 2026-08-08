document.getElementById("btn").onclick = () => {
  const blob = new Blob([JSON.stringify({ ok: true }, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "data.json";
  a.click();
  URL.revokeObjectURL(a.href);
  document.getElementById("out").textContent = "download triggered";
};
