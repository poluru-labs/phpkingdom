const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createDatePicker({ label = "Date", value = null } = {}) {
      let selected = value ? new Date(value) : null;
      let view = selected ? new Date(selected) : new Date();
      view.setDate(1);
      let open = false;

      const wrap = document.createElement("div");
      wrap.className = "c-datepicker";

      const lbl = document.createElement("label");
      lbl.className = "field-label";
      lbl.textContent = label;

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "c-datepicker__trigger";

      const popup = document.createElement("div");
      popup.className = "c-datepicker__popup";
      popup.hidden = true;

      const nav = document.createElement("div");
      nav.className = "c-datepicker__nav";
      const prevBtn = document.createElement("button");
      prevBtn.type = "button";
      prevBtn.textContent = "‹";
      prevBtn.setAttribute("aria-label", "Previous month");
      const monthLabel = document.createElement("span");
      const nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.textContent = "›";
      nextBtn.setAttribute("aria-label", "Next month");
      nav.append(prevBtn, monthLabel, nextBtn);

      const grid = document.createElement("div");
      grid.className = "c-datepicker__grid";

      function fmt(d) {
        return d.toLocaleDateString(undefined, { weekday: "short", year: "numeric", month: "short", day: "numeric" });
      }

      function fmtISO(d) {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return y + "-" + m + "-" + day;
      }

      function renderTrigger() {
        trigger.textContent = selected ? fmt(selected) : "Pick a date";
      }

      function renderCalendar() {
        monthLabel.textContent = view.toLocaleDateString(undefined, { month: "long", year: "numeric" });
        grid.innerHTML = "";
        ["Su","Mo","Tu","We","Th","Fr","Sa"].forEach((d) => {
          const dow = document.createElement("div");
          dow.className = "c-datepicker__dow";
          dow.textContent = d;
          grid.appendChild(dow);
        });

        const firstDay = new Date(view.getFullYear(), view.getMonth(), 1).getDay();
        const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
        const today = new Date();
        today.setHours(0,0,0,0);

        for (let i = 0; i < firstDay; i++) {
          const pad = document.createElement("button");
          pad.className = "c-datepicker__day";
          pad.disabled = true;
          grid.appendChild(pad);
        }

        for (let d = 1; d <= daysInMonth; d++) {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "c-datepicker__day";
          btn.textContent = d;
          const cellDate = new Date(view.getFullYear(), view.getMonth(), d);
          if (selected && cellDate.toDateString() === selected.toDateString()) btn.classList.add("is-selected");
          if (cellDate.toDateString() === today.toDateString()) btn.classList.add("is-today");
          btn.addEventListener("click", () => {
            selected = cellDate;
            renderTrigger();
            renderCalendar();
            setOpen(false);
            log("select: " + fmtISO(selected));
          });
          grid.appendChild(btn);
        }
      }

      function setOpen(v) {
        open = v;
        popup.hidden = !open;
        if (open) renderCalendar();
      }

      prevBtn.addEventListener("click", () => { view.setMonth(view.getMonth() - 1); renderCalendar(); log("nav: prev month"); });
      nextBtn.addEventListener("click", () => { view.setMonth(view.getMonth() + 1); renderCalendar(); log("nav: next month"); });
      trigger.addEventListener("click", () => setOpen(!open));
      document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) setOpen(false); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

      popup.append(nav, grid);
      lbl.append(trigger, popup);
      wrap.appendChild(lbl);
      renderTrigger();

      return { el: wrap, get value() { return selected ? fmtISO(selected) : null; } };
    }

    document.getElementById("mount").appendChild(createDatePicker({}).el);
