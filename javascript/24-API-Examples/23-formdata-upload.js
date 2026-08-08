const form = new FormData();
form.append("title", "JS Notes");
form.append("author", "Subrahmanyam Poluru");
form.append("site", "phpkingdom.com");
// form.append("file", fileInput.files[0]);
const pairs = [];
for (const [k, v] of form.entries()) pairs.push(k + "=" + v);
document.getElementById("out").textContent = pairs.join("\n");
// fetch("/api/upload", { method: "POST", body: form }) // no Content-Type header
