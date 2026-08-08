document.getElementById("go").onclick = () => {
  try {
    sessionStorage.setItem("pk-quota-demo", document.getElementById("val").value);
    document.getElementById("out").textContent = "ok length=" + sessionStorage.length;
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
