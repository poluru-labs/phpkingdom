document.getElementById("f").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  if (!email.checkValidity()) {
    email.reportValidity();
    document.getElementById("out").textContent = "invalid";
    return;
  }
  document.getElementById("out").textContent = "valid: " + email.value;
});
