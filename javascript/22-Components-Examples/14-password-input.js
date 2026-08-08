const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createPasswordInput({ label = "Password", placeholder = "Enter password" } = {}) {
      let visible = false;

      const wrap = document.createElement("label");
      wrap.className = "c-password field-label";
      wrap.textContent = label;

      const inner = document.createElement("div");
      inner.style.position = "relative";

      const input = document.createElement("input");
      input.type = "password";
      input.className = "c-input";
      input.placeholder = placeholder;

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "c-password__toggle";
      toggle.textContent = "Show";
      toggle.setAttribute("aria-label", "Show password");

      const hint = document.createElement("span");
      hint.className = "c-hint";
      hint.textContent = "At least 8 characters recommended.";

      toggle.addEventListener("click", () => {
        visible = !visible;
        input.type = visible ? "text" : "password";
        toggle.textContent = visible ? "Hide" : "Show";
        toggle.setAttribute("aria-label", visible ? "Hide password" : "Show password");
        log("toggle: " + (visible ? "visible" : "hidden"));
      });

      input.addEventListener("input", () => {
        log("input: length=" + input.value.length);
      });

      inner.append(input, toggle);
      wrap.append(inner, hint);

      return {
        el: wrap,
        get value() { return input.value; },
        show() { visible = true; input.type = "text"; toggle.textContent = "Hide"; },
        hide() { visible = false; input.type = "password"; toggle.textContent = "Show"; }
      };
    }

    document.getElementById("mount").appendChild(createPasswordInput({}).el);
