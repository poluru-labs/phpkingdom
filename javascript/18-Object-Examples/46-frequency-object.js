function wordFrequency(text) {
  return text.toLowerCase().match(/[a-z]+/g).reduce((acc, w) => {
    acc[w] = (acc[w] || 0) + 1;
    return acc;
  }, {});
}
document.getElementById("out").textContent = JSON.stringify(wordFrequency("to be or not to be"));
