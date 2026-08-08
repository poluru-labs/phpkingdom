const samples = [
  typeof "hi",
  typeof 42,
  typeof true,
  typeof undefined,
  typeof null, // historical quirk: "object"
  typeof 10n,
  typeof Symbol("id")
];
document.getElementById("out").textContent = samples.join("\n");
