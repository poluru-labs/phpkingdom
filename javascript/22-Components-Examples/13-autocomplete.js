const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createAutocomplete({ label = "Search fruits", suggestions = [] } = {}) {
      let activeIdx = -1;
      let filtered = [];

      const wrap = document.createElement("div");
      wrap.className = "c-autocomplete";

      const lbl = document.createElement("label");
      lbl.className = "field-label";
      lbl.textContent = label;

      const input = document.createElement("input");
      input.type = "text";
      input.className = "c-input";
      input.placeholder = "Type to search…";
      input.autocomplete = "off";

      const list = document.createElement("ul");
      list.className = "c-autocomplete__list";
      list.hidden = true;

      function highlight(text, q) {
        if (!q) return text;
        const i = text.toLowerCase().indexOf(q.toLowerCase());
        if (i < 0) return text;
        return text.slice(0, i) + "<mark>" + text.slice(i, i + q.length) + "</mark>" + text.slice(i + q.length);
      }

      function render() {
        list.innerHTML = "";
        filtered.forEach((item, i) => {
          const li = document.createElement("li");
          li.className = "c-autocomplete__item" + (i === activeIdx ? " is-active" : "");
          li.innerHTML = highlight(item, input.value);
          li.addEventListener("mousedown", (e) => {
            e.preventDefault();
            pick(item);
          });
          list.appendChild(li);
        });
        list.hidden = !filtered.length;
      }

      function pick(item) {
        input.value = item;
        list.hidden = true;
        activeIdx = -1;
        log("select: " + item);
      }

      input.addEventListener("input", () => {
        const q = input.value.trim();
        filtered = q ? suggestions.filter((s) => s.toLowerCase().includes(q.toLowerCase())) : [];
        activeIdx = filtered.length ? 0 : -1;
        render();
        log("input: \"" + q + "\" → " + filtered.length + " suggestions");
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, filtered.length - 1); render(); }
        if (e.key === "ArrowUp") { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); render(); }
        if (e.key === "Enter" && activeIdx >= 0) { e.preventDefault(); pick(filtered[activeIdx]); }
        if (e.key === "Escape") { list.hidden = true; }
      });

      document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) list.hidden = true; });

      lbl.append(input, list);
      wrap.appendChild(lbl);

      return { el: wrap, get value() { return input.value; } };
    }

    document.getElementById("mount").appendChild(createAutocomplete({
      suggestions: ["Apple", "Apricot", "Banana", "Blackberry", "Blueberry", "Cherry", "Grape", "Kiwi", "Lemon", "Mango", "Orange", "Peach", "Pear", "Plum", "Raspberry", "Strawberry", "Watermelon"]
    }).el);
