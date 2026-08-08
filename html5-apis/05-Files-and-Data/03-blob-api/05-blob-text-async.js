document.getElementById("go").onclick = async () => {
  const b = new Blob(["async blob text"], { type: "text/plain" });
  document.getElementById("out").textContent = await b.text();
};
