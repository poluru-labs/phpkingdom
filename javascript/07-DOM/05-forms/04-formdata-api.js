const form = document.createElement("form");
form.innerHTML = '<input name="email" value="a@b.com"><input name="ok" type="checkbox" checked>';
const fd = new FormData(form);
document.getElementById("out").textContent = "email=" + fd.get("email") + " ok=" + fd.get("ok");
