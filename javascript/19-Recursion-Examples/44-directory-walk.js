const fsTree = {
  name: "project",
  type: "dir",
  children: [
    { name: "index.html", type: "file" },
    { name: "src", type: "dir", children: [
      { name: "app.js", type: "file" },
      { name: "utils", type: "dir", children: [{ name: "helpers.js", type: "file" }] }
    ]}
  ]
};
function walkTree(node, prefix = "", files = []) {
  const path = prefix ? prefix + "/" + node.name : node.name;
  if (node.type === "file") files.push(path);
  else if (node.children) node.children.forEach((c) => walkTree(c, path, files));
  return files;
}
document.getElementById("out").textContent = walkTree(fsTree).join("\n");
