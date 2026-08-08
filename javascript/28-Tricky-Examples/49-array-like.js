function demo() {
  const like = arguments;
  document.getElementById("out").textContent =
    "length=" + like.length + "\n" +
    "isArray=" + Array.isArray(like) + "\n" +
    "from=" + Array.from(like).join(",");
}
demo("a", "b", "c");
