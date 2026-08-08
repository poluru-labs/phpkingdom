const messy = "  Hello    world   from   regex  ";
const clean = messy.replace(/\s+/g, " ").trim();
document.getElementById("out").textContent =
  "before: [" + messy + "]\n" +
  "after:  [" + clean + "]";
