function indexBy(arr, key) {
  return Object.fromEntries(arr.map((item) => [item[key], item]));
}
const courses = [{ id: "html", title: "HTML" }, { id: "css", title: "CSS" }];
document.getElementById("out").textContent = JSON.stringify(indexBy(courses, "id"), null, 2);
