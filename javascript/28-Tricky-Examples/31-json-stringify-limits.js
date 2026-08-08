const obj = { a: 1, b: undefined, c: function () {}, d: NaN };
document.getElementById("out").textContent = JSON.stringify(obj);
