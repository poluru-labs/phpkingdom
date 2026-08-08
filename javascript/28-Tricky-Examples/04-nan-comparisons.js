document.getElementById("out").textContent =
  "NaN === NaN => " + (NaN === NaN) + "\n" +
  "Number.isNaN(NaN) => " + Number.isNaN(NaN) + "\n" +
  "Object.is(NaN, NaN) => " + Object.is(NaN, NaN);
