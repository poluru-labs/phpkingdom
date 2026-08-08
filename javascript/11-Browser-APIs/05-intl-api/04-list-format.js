const lf = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
document.getElementById("out").textContent = lf.format(["Ada", "Grace", "Alan"]);
