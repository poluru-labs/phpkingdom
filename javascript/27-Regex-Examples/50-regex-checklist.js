const checklist = [
  "[x] RegExp.test(str) — boolean match check",
  "[x] RegExp.exec(str) — first match + groups",
  "[x] str.match(re) / str.matchAll(re)",
  "[x] str.search(re) / str.replace(re, repl)",
  "[x] str.split(re) — split on pattern",
  "[x] Flags: g i m u s y d (dotAll, sticky, hasIndices)",
  "[x] Classes: \\d \\w \\s [a-z] [^0-9]",
  "[x] Anchors: ^ $ \\b \\B",
  "[x] Quantifiers: * + ? {n,m} greedy vs lazy *?",
  "[x] Groups: ( ) (?<name>) (?:) backreferences",
  "[x] Lookahead / lookbehind: (?=) (?!) (?<=) (?<!)",
  "[x] Validate: email, URL, phone, hex, date",
  "[x] Extract & replace patterns safely",
  "[x] Escape user input; reset lastIndex on /g",
  "[x] Redact PII; prefer simple patterns first"
];
document.getElementById("out").textContent = checklist.join("\n");
