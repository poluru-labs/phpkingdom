const emails = ["user@example.com", "bad@", "@bad.com", "a.b+c@co.uk"];
const re = /^[\w.+-]+@[\w-]+\.[\w.-]+$/;
const results = emails.map(e => e + " => " + re.test(e));
document.getElementById("out").textContent = results.join("\n");
