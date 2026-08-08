"use strict";
try {
  // undeclared = 1;
  undeclared = 1;
} catch (e) {
  document.getElementById("out").textContent =
    "strict mode blocks accidental globals:\n" + e.message;
}
