const b = document.getElementById("b");
const kids = [...b.parentElement.children].map((el) => el.textContent);
document.getElementById("out").textContent =
  "parent tag=" + b.parentElement.tagName +
  "\nchildren=[" + kids.join(", ") + "]" +
  "\nnext of B=" + b.nextElementSibling.textContent +
  "\nprev of B=" + b.previousElementSibling.textContent;
