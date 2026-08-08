document.getElementById("go").onclick = async () => {
  try {
    const res = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ site: "phpkingdom.com" }),
    });
    const data = await res.json();
    document.getElementById("out").textContent = JSON.stringify(data.json || data, null, 2);
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
