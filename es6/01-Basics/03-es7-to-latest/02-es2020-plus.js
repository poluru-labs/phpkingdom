const user = { profile: { name: "Ada" } };
document.getElementById("out").textContent =
  user?.profile?.name + " / " + (null ?? "fallback");
