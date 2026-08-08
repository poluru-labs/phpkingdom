const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createSelect({ label = "Framework", options = [], value = null } = {}) {
      let selected = value ?? options[0]?.value ?? null;
      let open = false;
      let activeIdx = options.findIndex((o) => o.value === selected);

      const wrap = document.createElement("div");
      wrap.className = "c-select";

      const lbl = document.createElement("label");
      lbl.className = "field-label";
      lbl.textContent = label;

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "c-select__trigger";
      trigger.setAttribute("aria-haspopup", "listbox");
      trigger.setAttribute("aria-expanded", "false");

      const list = document.createElement("ul");
      list.className = "c-select__list";
      list.setAttribute("role", "listbox");
      list.hidden = true;

      const optionEls = options.map((opt, i) => {
        const li = document.createElement("li");
        li.className = "c-select__option";
        li.setAttribute("role", "option");
        li.textContent = opt.label;
        li.dataset.value = opt.value;
        li.addEventListener("click", () => select(opt.value, i));
        list.appendChild(li);
        return li;
      });

      function renderTrigger() {
        const opt = options.find((o) => o.value === selected);
        trigger.textContent = opt ? opt.label : "Select…";
      }

      function setOpen(v) {
        open = v;
        list.hidden = !open;
        trigger.setAttribute("aria-expanded", String(open));
        if (open) optionEls[activeIdx]?.classList.add("is-active");
      }

      function select(val, idx) {
        selected = val;
        activeIdx = idx;
        optionEls.forEach((el) => el.setAttribute("aria-selected", el.dataset.value === val ? "true" : "false"));
        renderTrigger();
        setOpen(false);
        log("change: " + val);
      }

      trigger.addEventListener("click", () => setOpen(!open));
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, options.length - 1); setOpen(true); }
        if (e.key === "ArrowUp") { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); setOpen(true); }
        if (e.key === "Enter" && open) { select(options[activeIdx].value, activeIdx); }
        if (e.key === "Escape") setOpen(false);
      });

      document.addEventListener("click", (e) => {
        if (!wrap.contains(e.target)) setOpen(false);
      });

      renderTrigger();
      optionEls.forEach((el) => el.setAttribute("aria-selected", el.dataset.value === selected ? "true" : "false"));
      lbl.append(trigger, list);
      wrap.appendChild(lbl);

      return { el: wrap, get value() { return selected; }, set value(v) { const i = options.findIndex((o) => o.value === v); if (i >= 0) select(v, i); } };
    }

    document.getElementById("mount").appendChild(createSelect({
      options: [
        { label: "Vanilla JS", value: "vanilla" },
        { label: "React", value: "react" },
        { label: "Vue", value: "vue" },
        { label: "Svelte", value: "svelte" }
      ]
    }).el);
