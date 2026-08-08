const input = document.getElementById("draft");
input.value = sessionStorage.getItem("draft") || "";
input.addEventListener("input", () => {
  sessionStorage.setItem("draft", input.value);
  document.getElementById("out").textContent = "saved draft length=" + input.value.length;
});
