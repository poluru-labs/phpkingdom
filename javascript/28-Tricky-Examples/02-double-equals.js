const lines = [
  '"" == false => ' + ("" == false),
  '0 == false => ' + (0 == false),
  'null == undefined => ' + (null == undefined),
  'null == 0 => ' + (null == 0),
  '" \t\r\n" == 0 => ' + (" \t\r\n" == 0)
];
document.getElementById("out").textContent = lines.join("\n");
