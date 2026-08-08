document.getElementById("parent").addEventListener("ping", (e) => {
  document.getElementById("out").textContent =
    "parent heard ping: " + e.detail.msg;
});
document.getElementById("btn").onclick = () => {
  document.getElementById("btn").dispatchEvent(
    new CustomEvent("ping", { bubbles: true, detail: { msg: "hello" } })
  );
};
