document.getElementById("btn").onclick = async () => {
  try {
    const res = await fetch("https://httpbin.org/get");
    const data = await res.json();
    document.getElementById("out").textContent = "url=" + data.url;
  } catch (e) {
    document.getElementById("out").textContent = "error: " + e.message;
  }
};
