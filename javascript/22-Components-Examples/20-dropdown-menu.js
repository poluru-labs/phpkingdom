const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createDropdownMenu({ label = "Actions", items = [] } = {}) {
      let open = false;

      const wrap = document.createElement("div");
      wrap.className = "c-dropdown";

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "c-btn c-btn--secondary";
      trigger.textContent = label + " ▾";
      trigger.setAttribute("aria-haspopup", "menu");
      trigger.setAttribute("aria-expanded", "false");

      const menu = document.createElement("ul");
      menu.className = "c-dropdown__menu";
      menu.setAttribute("role", "menu");
      menu.hidden = true;

      function setOpen(v) {
        open = v;
        menu.hidden = !open;
        trigger.setAttribute("aria-expanded", String(open));
        if (open) log("open");
      }

      items.forEach((item) => {
        if (item === "---") {
          const sep = document.createElement("li");
          sep.className = "c-dropdown__sep";
          sep.setAttribute("role", "separator");
          menu.appendChild(sep);
          return;
        }
        const li = document.createElement("li");
        li.setAttribute("role", "none");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "c-dropdown__item" + (item.danger ? " is-danger" : "");
        btn.setAttribute("role", "menuitem");
        btn.textContent = item.label;
        btn.addEventListener("click", () => {
          setOpen(false);
          log("select: " + item.label);
          if (item.onSelect) item.onSelect();
        });
        li.appendChild(btn);
        menu.appendChild(li);
      });

      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        setOpen(!open);
      });

      document.addEventListener("click", () => { if (open) setOpen(false); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape" && open) setOpen(false); });

      wrap.append(trigger, menu);

      return { el: wrap, close: () => setOpen(false) };
    }

    document.getElementById("mount").appendChild(createDropdownMenu({
      label: "File",
      items: [
        { label: "New" },
        { label: "Open" },
        { label: "Save" },
        "---",
        { label: "Delete", danger: true }
      ]
    }).el);
