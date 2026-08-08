const rows = [
  { name: "Ada", score: 98 },
  { name: "Grace", score: 95 },
  { name: "Alan", score: 91 },
];
document.getElementById("btn").onclick = () => {
  const tbody = document.querySelector("#tbl tbody");
  tbody.replaceChildren(
    ...rows.map((r) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      td1.textContent = r.name;
      td2.textContent = String(r.score);
      tr.append(td1, td2);
      return tr;
    })
  );
};
