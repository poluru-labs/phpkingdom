document.getElementById("out").textContent =
`Promises checklist:
1. Every rejection path has a catch / try-catch
2. Prefer Promise.all for independent parallel work
3. Use allSettled when partial failure is OK
4. Use race/any intentionally (timeouts vs first success)
5. Return promises from then to keep chaining flat
6. Prefer async/await for deep sequences
7. Do not await inside forEach
8. Convert callbacks with promisify carefully
9. Know microtasks vs timers
10. Abort/cancel long operations when possible

site: phpkingdom.com
author: Subrahmanyam Poluru`;
