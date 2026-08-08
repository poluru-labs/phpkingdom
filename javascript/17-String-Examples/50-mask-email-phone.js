function maskEmail(email) {
  const [name, domain] = email.split("@");
  return name[0] + "***" + name[name.length - 1] + "@" + domain;
}
function maskPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return "***-***-" + digits.slice(-4);
}
document.getElementById("out").textContent =
  maskEmail("mail.polurus@gmail.com") + " | " + maskPhone("+1 (555) 123-9876");
