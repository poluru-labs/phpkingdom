document.getElementById("out").textContent =
`CORS is enforced by browsers.
A frontend on https://phpkingdom.com calling https://api.other.com
needs Access-Control-Allow-Origin from the API.

Simple mental model:
1) Browser sends Origin header
2) Server must allow that origin
3) Otherwise fetch fails with a CORS error (not your JSON body)`;
