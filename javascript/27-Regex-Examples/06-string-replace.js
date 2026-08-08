const text = "foo bar foo baz foo";
const once = text.replace(/foo/, "qux");
const all = text.replace(/foo/g, "qux");
document.getElementById("out").textContent =
  "once:  " + once + "\n" +
  "all:   " + all;
