const out = document.getElementById("out");
const p1 = new Promise((_, reject) => reject(new Error("via reject")));
const p2 = new Promise(() => { throw new Error("via throw"); });
Promise.all([
  p1.catch(e => "reject: " + e.message),
  p2.catch(e => "throw: " + e.message),
]).then(lines => { out.textContent = lines.join("\n"); });
