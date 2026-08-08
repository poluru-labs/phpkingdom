const arr = ["a", "b", "c"];
delete arr[1];
document.getElementById("out").textContent =
  "arr=" + JSON.stringify(arr) + " length=" + arr.length + "\n" +
  "use splice to remove properly: " + ["a","b","c"].splice(1,1) + " -> " + (function(){const a=["a","b","c"]; a.splice(1,1); return JSON.stringify(a);})();
