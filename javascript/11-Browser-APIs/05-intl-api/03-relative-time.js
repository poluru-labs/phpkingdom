const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
document.getElementById("out").textContent = rtf.format(-1, "day") + "\n" + rtf.format(3, "hour");
