const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createDateRangePicker({ label = "Date range" } = {}) {
      let start = null;
      let end = null;
      let picking = "start";
      let view = new Date();
      view.setDate(1);
      let open = false;

      const wrap = document.createElement("div");
      wrap.className = "c-daterange";

      const lbl = document.createElement("label");
      lbl.className = "field-label";
      lbl.textContent = label;

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "c-daterange__trigger";

      const popup = document.createElement("div");
      popup.className = "c-daterange__popup";
      popup.hidden = true;

      const hint = document.createElement("p");
      hint.className = "c-daterange__hint";
      hint.textContent = "Click start date, then end date.";

      const nav = document.createElement("div");
      nav.className = "c-daterange__nav";
      const prevBtn = document.createElement("button");
      prevBtn.type = "button";
      prevBtn.textContent = "‹";
      const monthLabel = document.createElement("span");
      const nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.textContent = "›";
      nav.append(prevBtn, monthLabel, nextBtn);

      const grid = document.createElement("div");
      grid.className = "c-daterange__grid";

      function fmtISO(d) {
        return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
      }

      function fmtShort(d) {
        return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
      }

      function renderTrigger() {
        if (start && end) trigger.textContent = fmtShort(start) + " → " + fmtShort(end);
        else if (start) trigger.textContent = fmtShort(start) + " → …";
        else trigger.textContent = "Select range";
      }

      function inRange(d) {
        if (!start || !end) return false;
        const t = d.getTime();
        return t > start.getTime() && t < end.getTime();
      }

      function renderCalendar() {
        monthLabel.textContent = view.toLocaleDateString(undefined, { month: "long", year: "numeric" });
        grid.innerHTML = "";
        ["Su","Mo","Tu","We","Th","Fr","Sa"].forEach((d) => {
          const el = document.createElement("div");
          el.className = "c-daterange__dow";
          el.textContent = d;
          grid.appendChild(el);
        });

        const firstDay = new Date(view.getFullYear(), view.getMonth(), 1).getDay();
        const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
          const pad = document.createElement("button");
          pad.className = "c-daterange__day";
          pad.disabled = true;
          grid.appendChild(pad);
        }

        for (let d = 1; d <= daysInMonth; d++) {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "c-daterange__day";
          btn.textContent = d;
          const cell = new Date(view.getFullYear(), view.getMonth(), d);
          if (start && cell.toDateString() === start.toDateString()) btn.classList.add("is-start");
          if (end && cell.toDateString() === end.toDateString()) btn.classList.add("is-end");
          if (inRange(cell)) btn.classList.add("is-in-range");

          btn.addEventListener("click", () => {
            if (picking === "start" || (start && end)) {
              start = cell;
              end = null;
              picking = "end";
              hint.textContent = "Now pick end date.";
              log("start: " + fmtISO(start));
            } else {
              if (cell < start) { end = start; start = cell; }
              else end = cell;
              picking = "start";
              hint.textContent = "Range complete. Click to start over.";
              setOpen(false);
              log("range: " + fmtISO(start) + " → " + fmtISO(end));
            }
            renderTrigger();
            renderCalendar();
          });
          grid.appendChild(btn);
        }
      }

      function setOpen(v) {
        open = v;
        popup.hidden = !open;
        if (open) renderCalendar();
      }

      prevBtn.addEventListener("click", () => { view.setMonth(view.getMonth() - 1); renderCalendar(); });
      nextBtn.addEventListener("click", () => { view.setMonth(view.getMonth() + 1); renderCalendar(); });
      trigger.addEventListener("click", () => setOpen(!open));
      document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) setOpen(false); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

      popup.append(hint, nav, grid);
      lbl.append(trigger, popup);
      wrap.appendChild(lbl);
      renderTrigger();

      return {
        el: wrap,
        get range() { return start && end ? { start: fmtISO(start), end: fmtISO(end) } : null; }
      };
    }

    document.getElementById("mount").appendChild(createDateRangePicker({}).el);
