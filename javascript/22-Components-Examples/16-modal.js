const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createModal({ title = "Confirm action", body = "Are you sure?", open = false } = {}) {
      let isOpen = open;
      let lastFocus = null;

      const overlay = document.createElement("div");
      overlay.className = "c-modal__overlay";
      overlay.hidden = !isOpen;
      overlay.setAttribute("role", "presentation");

      const dialog = document.createElement("div");
      dialog.className = "c-modal__dialog";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-labelledby", "modal-title");

      const header = document.createElement("div");
      header.className = "c-modal__header";
      const h = document.createElement("h3");
      h.className = "c-modal__title";
      h.id = "modal-title";
      h.textContent = title;
      const closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className = "c-modal__close";
      closeBtn.textContent = "×";
      closeBtn.setAttribute("aria-label", "Close");
      header.append(h, closeBtn);

      const bodyEl = document.createElement("div");
      bodyEl.className = "c-modal__body";
      bodyEl.textContent = body;

      const footer = document.createElement("div");
      footer.className = "c-modal__footer";
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = "c-btn c-btn--secondary";
      cancelBtn.textContent = "Cancel";
      const okBtn = document.createElement("button");
      okBtn.type = "button";
      okBtn.className = "c-btn c-btn--primary";
      okBtn.textContent = "Confirm";
      footer.append(cancelBtn, okBtn);

      dialog.append(header, bodyEl, footer);
      overlay.appendChild(dialog);

      function trapFocus(e) {
        if (e.key !== "Tab" || !isOpen) return;
        const focusable = dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }

      function show() {
        isOpen = true;
        overlay.hidden = false;
        lastFocus = document.activeElement;
        closeBtn.focus();
        document.addEventListener("keydown", onKey);
        document.addEventListener("keydown", trapFocus);
        log("open");
      }

      function hide(reason) {
        isOpen = false;
        overlay.hidden = true;
        document.removeEventListener("keydown", onKey);
        document.removeEventListener("keydown", trapFocus);
        if (lastFocus) lastFocus.focus();
        log("close: " + reason);
      }

      function onKey(e) {
        if (e.key === "Escape") hide("escape");
      }

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) hide("overlay");
      });
      closeBtn.addEventListener("click", () => hide("button"));
      cancelBtn.addEventListener("click", () => hide("cancel"));
      okBtn.addEventListener("click", () => hide("confirm"));

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "c-btn c-btn--primary";
      trigger.textContent = "Open modal";
      trigger.addEventListener("click", show);

      document.body.appendChild(overlay);

      return { el: trigger, show, hide, overlay };
    }

    document.getElementById("mount").appendChild(createModal({
      title: "Delete item?",
      body: "This action cannot be undone. The item will be permanently removed."
    }).el);
