const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createDrawer({ title = "Settings", body = "Drawer content goes here." } = {}) {
      let isOpen = false;

      const overlay = document.createElement("div");
      overlay.className = "c-drawer__overlay";

      const panel = document.createElement("aside");
      panel.className = "c-drawer__panel";
      panel.setAttribute("role", "dialog");
      panel.setAttribute("aria-modal", "true");

      const header = document.createElement("div");
      header.className = "c-drawer__header";
      const h = document.createElement("h3");
      h.className = "c-drawer__title";
      h.textContent = title;
      const closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className = "c-drawer__close";
      closeBtn.textContent = "×";
      closeBtn.setAttribute("aria-label", "Close drawer");
      header.append(h, closeBtn);

      const bodyEl = document.createElement("div");
      bodyEl.className = "c-drawer__body";
      bodyEl.textContent = body;

      panel.append(header, bodyEl);
      document.body.append(overlay, panel);

      function open() {
        isOpen = true;
        overlay.classList.add("is-open");
        panel.classList.add("is-open");
        closeBtn.focus();
        document.addEventListener("keydown", onKey);
        log("open");
      }

      function close(reason) {
        isOpen = false;
        overlay.classList.remove("is-open");
        panel.classList.remove("is-open");
        document.removeEventListener("keydown", onKey);
        log("close: " + reason);
      }

      function onKey(e) {
        if (e.key === "Escape") close("escape");
      }

      overlay.addEventListener("click", () => close("overlay"));
      closeBtn.addEventListener("click", () => close("button"));

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "c-btn c-btn--primary";
      trigger.textContent = "Open drawer";
      trigger.addEventListener("click", open);

      return { el: trigger, open, close };
    }

    document.getElementById("mount").appendChild(createDrawer({
      title: "Account settings",
      body: "Update your profile, notification preferences, and security options from this side panel."
    }).el);
