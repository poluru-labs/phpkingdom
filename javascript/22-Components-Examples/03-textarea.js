const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createTextarea({ label = "Message", maxLength = 200, autoResize = true } = {}) {
      const wrap = document.createElement("div");
      wrap.className = "textarea-wrap";

      const lbl = document.createElement("label");
      lbl.className = "field-label";
      lbl.textContent = label;

      const ta = document.createElement("textarea");
      ta.className = "c-textarea" + (autoResize ? " auto-resize" : "");
      ta.maxLength = maxLength;

      const meta = document.createElement("div");
      meta.className = "textarea-meta";
      const hint = document.createElement("span");
      hint.className = "c-hint";
      hint.textContent = autoResize ? "Auto-resizes" : "Fixed height";
      const count = document.createElement("span");
      count.className = "textarea-count";
      count.textContent = "0 / " + maxLength;
      meta.append(hint, count);

      function resize() {
        if (!autoResize) return;
        ta.style.height = "auto";
        ta.style.height = ta.scrollHeight + "px";
      }

      function updateCount() {
        const len = ta.value.length;
        count.textContent = len + " / " + maxLength;
        count.classList.toggle("is-over", len >= maxLength);
        log("input: " + len + " chars");
      }

      ta.addEventListener("input", () => { resize(); updateCount(); });
      resize();

      lbl.appendChild(ta);
      wrap.append(lbl, meta);

      return {
        el: wrap,
        get value() { return ta.value; },
        set value(v) { ta.value = v; resize(); updateCount(); }
      };
    }

    document.getElementById("mount").appendChild(createTextarea({}).el);
