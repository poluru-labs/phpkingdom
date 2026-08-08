const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createTabs({ tabs = [] } = {}) {
      let active = tabs[0]?.id ?? null;

      const wrap = document.createElement("div");
      wrap.className = "c-tabs";

      const list = document.createElement("div");
      list.className = "c-tabs__list";
      list.setAttribute("role", "tablist");

      const panelsWrap = document.createElement("div");

      const tabBtns = [];
      const panelEls = [];

      tabs.forEach((tab, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "c-tabs__tab";
        btn.setAttribute("role", "tab");
        btn.id = "tab-" + tab.id;
        btn.textContent = tab.label;
        btn.setAttribute("aria-controls", "panel-" + tab.id);

        const panel = document.createElement("div");
        panel.className = "c-tabs__panel";
        panel.id = "panel-" + tab.id;
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("aria-labelledby", btn.id);
        panel.textContent = tab.content;

        btn.addEventListener("click", () => select(tab.id));
        btn.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight") tabBtns[(i + 1) % tabs.length].focus();
          if (e.key === "ArrowLeft") tabBtns[(i - 1 + tabs.length) % tabs.length].focus();
        });

        tabBtns.push(btn);
        panelEls.push(panel);
        list.appendChild(btn);
        panelsWrap.appendChild(panel);
      });

      function select(id) {
        active = id;
        tabs.forEach((tab, i) => {
          const on = tab.id === id;
          tabBtns[i].setAttribute("aria-selected", on ? "true" : "false");
          panelEls[i].hidden = !on;
        });
        log("change: " + id);
      }

      select(active);
      wrap.append(list, panelsWrap);

      return { el: wrap, select, get active() { return active; } };
    }

    document.getElementById("mount").appendChild(createTabs({
      tabs: [
        { id: "overview", label: "Overview", content: "General summary and key metrics for your project." },
        { id: "details", label: "Details", content: "Detailed configuration options and metadata." },
        { id: "history", label: "History", content: "Recent activity log and version timeline." }
      ]
    }).el);
