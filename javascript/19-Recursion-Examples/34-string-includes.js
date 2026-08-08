function stringIncludes(haystack, needle, i = 0) {
  if (i + needle.length > haystack.length) return false;
  if (haystack.slice(i, i + needle.length) === needle) return true;
  return stringIncludes(haystack, needle, i + 1);
}
document.getElementById("out").textContent =
  stringIncludes("javascript", "script") + ", " + stringIncludes("javascript", "java");
