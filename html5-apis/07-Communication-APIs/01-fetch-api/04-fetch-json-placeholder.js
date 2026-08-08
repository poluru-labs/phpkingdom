document.getElementById("go").onclick = async () => {
  try {
    const res = await fetch("https://httpbin.org/json");
    const data = await res.json();
    document.getElementById("out").textContent = "status=" + res.status + "\n" + JSON.stringify(data).slice(0, 200);
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
