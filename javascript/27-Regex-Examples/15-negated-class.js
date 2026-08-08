const text = "abc123xyz";
const notDigits = text.match(/[^0-9]+/g);
const notVowels = "hello".match(/[^aeiou]+/g);
document.getElementById("out").textContent =
  "not digits: " + JSON.stringify(notDigits) + "\n" +
  "not vowels: " + JSON.stringify(notVowels);
