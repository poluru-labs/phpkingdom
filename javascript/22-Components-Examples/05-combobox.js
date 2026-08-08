const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createCombobox({ label = "City", options = [] } = {}) {
      let selected = null;
      let activeIdx = 0;
      let filtered = [...options];

      const wrap = document.createElement("div");
      wrap.className = "c-combo";

      const lbl = document.createElement("label");
      lbl.className = "field-label";
      lbl.textContent = label;

      const input = document.createElement("input");
      input.type = "text";
      input.className = "c-input";
      input.placeholder = "Search cities…";
      input.setAttribute("role", "combobox");
      input.setAttribute("aria-expanded", "false");
      input.autocomplete = "off";

      const list = document.createElement("ul");
      list.className = "c-combo__list";
      list.hidden = true;

      function renderList() {
        list.innerHTML = "";
        if (!filtered.length) {
          const empty = document.createElement("li");
          empty.className = "c-combo__empty";
          empty.textContent = "No matches";
          list.appendChild(empty);
          return;
        }
        filtered.forEach((opt, i) => {
          const li = document.createElement("li");
          li.className = "c-combo__item" + (i === activeIdx ? " is-active" : "");
          li.textContent = opt.label;
          li.addEventListener("mousedown", (e) => { e.preventDefault(); pick(opt, i); });
          list.appendChild(li);
        });
      }

      function setOpen(v) {
        list.hidden = !v;
        input.setAttribute("aria-expanded", String(v));
      }

      function filter(q) {
        filtered = options.filter((o) => o.label.toLowerCase().includes(q.toLowerCase()));
        activeIdx = 0;
        renderList();
        setOpen(true);
        log("filter: \"" + q + "\" → " + filtered.length + " results");
      }

      function pick(opt, idx) {
        selected = opt.value;
        input.value = opt.label;
        activeIdx = idx;
        setOpen(false);
        log("select: " + opt.label + " (" + opt.value + ")");
      }

      input.addEventListener("input", () => filter(input.value));
      input.addEventListener("focus", () => { filter(input.value); });
      input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, filtered.length - 1); renderList(); }
        if (e.key === "ArrowUp") { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); renderList(); }
        if (e.key === "Enter" && filtered[activeIdx]) pick(filtered[activeIdx], activeIdx);
        if (e.key === "Escape") setOpen(false);
      });

      document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) setOpen(false); });

      lbl.append(input, list);
      wrap.appendChild(lbl);

      return { el: wrap, get value() { return selected; } };
    }

    document.getElementById("mount").appendChild(createCombobox({
      options: [
        { label: "New York", value: "nyc" },
        { label: "Los Angeles", value: "la" },
        { label: "Chicago", value: "chi" },
        { label: "Houston", value: "hou" },
        { label: "Phoenix", value: "phx" },
        { label: "San Francisco", value: "sf" }
      ]
    }).el);
