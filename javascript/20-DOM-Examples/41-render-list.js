const fruits = ["Apple", "Banana", "Cherry"];
document.getElementById("btn").onclick = () => {
  const list = document.getElementById("list");
  list.replaceChildren(
    ...fruits.map((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      return li;
    })
  );
};
