const colors = ["#fff", "#FF5733", "#ggg", "FF5733", "#abcd"];
const re = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
const results = colors.map(c => c + " => " + re.test(c));
document.getElementById("out").textContent = results.join("\n");
