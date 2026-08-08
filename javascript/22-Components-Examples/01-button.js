const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createButton({ label = "Button", variant = "primary", loading = false, disabled = false, onClick } = {}) {
      const el = document.createElement("button");
      el.type = "button";
      el.className = "c-btn c-btn--" + variant;
      el.textContent = label;
      el.disabled = disabled || loading;
      if (loading) el.classList.add("is-loading");

      el.addEventListener("click", () => {
        if (onClick) onClick();
        log("click: " + label + " (" + variant + ")");
      });

      return {
        el,
        setLoading(v) {
          loading = v;
          el.disabled = disabled || loading;
          el.classList.toggle("is-loading", loading);
        },
        setDisabled(v) {
          disabled = v;
          el.disabled = disabled || loading;
        },
        get label() { return label; }
      };
    }

    const mount = document.getElementById("mount");
    [
      createButton({ label: "Primary", variant: "primary" }),
      createButton({ label: "Secondary", variant: "secondary" }),
      createButton({ label: "Ghost", variant: "ghost" }),
      createButton({ label: "Danger", variant: "danger" }),
      createButton({ label: "Loading", variant: "primary", loading: true }),
      createButton({ label: "Disabled", variant: "primary", disabled: true })
    ].forEach((btn) => mount.appendChild(btn.el));
