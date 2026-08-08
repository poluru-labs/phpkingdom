const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createPopover({ triggerLabel = "Details", title = "About this", content = "Extra information appears here." } = {}) {
      let open = false;

      const wrap = document.createElement("div");
      wrap.className = "c-popover";

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "c-btn c-btn--secondary";
      trigger.textContent = triggerLabel;
      trigger.setAttribute("aria-expanded", "false");

      const panel = document.createElement("div");
      panel.className = "c-popover__panel";
      panel.hidden = true;
      const h = document.createElement("h4");
      h.className = "c-popover__title";
      h.textContent = title;
      const p = document.createElement("p");
      p.className = "c-popover__text";
      p.textContent = content;
      panel.append(h, p);

      function setOpen(v) {
        open = v;
        panel.hidden = !open;
        trigger.setAttribute("aria-expanded", String(open));
        log(open ? "open" : "close");
      }

      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        setOpen(!open);
      });

      document.addEventListener("click", () => { if (open) setOpen(false); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape" && open) setOpen(false); });

      wrap.append(trigger, panel);

      return { el: wrap, toggle: () => setOpen(!open), close: () => setOpen(false) };
    }

    document.getElementById("mount").appendChild(createPopover({
      triggerLabel: "Show info",
      title: "Storage usage",
      content: "You have used 2.4 GB of your 5 GB quota. Upgrade for more space."
    }).el);
