async function load() {
  const data = await Promise.resolve({ ok: true, items: 3 });
  return data;
}
document.getElementById("go").onclick = async () => {
  const data = await load();
  document.getElementById("out").textContent = JSON.stringify(data, null, 2);
};
