const input = document.createElement("input");
input.type = "email";
input.value = "not-an-email";
input.required = true;
document.getElementById("out").textContent = "valid=" + input.checkValidity() + "\n" + input.validationMessage;
