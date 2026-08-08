const book = { title: "JS" };
book.pages = 200;
book["title"] = "JavaScript";
document.getElementById("out").textContent = book.title + " / " + book.pages;
