const NS = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(NS, "svg");
svg.setAttribute("width", "200"); svg.setAttribute("height", "100");
const c = document.createElementNS(NS, "circle");
c.setAttribute("cx", "100"); c.setAttribute("cy", "50"); c.setAttribute("r", "30");
c.setAttribute("fill", "#0f766e");
svg.appendChild(c);
document.getElementById("host").appendChild(svg);
document.getElementById("out").textContent = "SVG circle appended";
