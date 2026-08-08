document.getElementById("out").textContent = "EventSource=" + (typeof EventSource) +
  "\nPattern: const es = new EventSource('/events'); es.onmessage = (e) => …";
