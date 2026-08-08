const text = "foobar foo baz foobar";
const re = /foo(?!bar)/g;
const matches = text.match(re);
document.getElementById("out").textContent =
  "text: " + text + "\n" +
  "/foo(?!bar)/g => " + JSON.stringify(matches);
