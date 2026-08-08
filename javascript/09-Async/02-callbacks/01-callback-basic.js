function loadUser(cb) {
  setTimeout(function () { cb({ name: "Ada" }); }, 300);
}
loadUser(function (user) {
  document.getElementById("out").textContent = user.name;
});
