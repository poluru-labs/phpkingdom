const book = { title: "JS Basics" };
book.pages = 120;
book.title = "JavaScript Basics";
delete book.pages;
document.getElementById("out").textContent = JSON.stringify(book);
