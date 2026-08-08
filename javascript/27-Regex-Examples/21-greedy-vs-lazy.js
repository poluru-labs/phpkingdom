const html = "<b>bold</b> and <i>italic</i>";
const greedy = html.match(/<.*>/);
const lazy = html.match(/<.*?>/g);
document.getElementById("out").textContent =
  "greedy <.*>:   " + greedy[0] + "\n" +
  "lazy <.*?>:    " + JSON.stringify(lazy);
