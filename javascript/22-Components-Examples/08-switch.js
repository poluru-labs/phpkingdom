const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createSwitch({ label = "Notifications", checked = false, disabled = false } = {}) {
      const el = document.createElement("label");
      el.className = "c-switch";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.role = "switch";
      input.checked = checked;
      input.disabled = disabled;

      const track = document.createElement("span");
      track.className = "c-switch__track";
      const thumb = document.createElement("span");
      thumb.className = "c-switch__thumb";
      track.appendChild(thumb);

      const text = document.createElement("span");
      text.textContent = label;

      input.addEventListener("change", () => {
        log("change: " + label + " → " + (input.checked ? "on" : "off"));
      });

      el.append(input, track, text);

      return {
        el,
        get checked() { return input.checked; },
        set checked(v) { input.checked = v; }
      };
    }

    const mount = document.getElementById("mount");
    mount.append(
      createSwitch({ label: "Email notifications" }).el,
      createSwitch({ label: "Dark mode", checked: true }).el,
      createSwitch({ label: "Beta features", disabled: true }).el
    );
