document.getElementById("go").onclick = () => {
  const u = new URL(location.href);
  if (u.searchParams.get("q")) u.searchParams.delete("q");
  else u.searchParams.set("q", "html5");
  document.getElementById("out").textContent = u.search || "(no search)";
};
