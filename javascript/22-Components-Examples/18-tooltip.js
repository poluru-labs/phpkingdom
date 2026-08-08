const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createTooltip({ triggerLabel = "Hover me", text = "Helpful hint" } = {}) {
      const wrap = document.createElement("span");
      wrap.className = "c-tooltip-wrap";

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "c-btn c-btn--secondary";
      trigger.textContent = triggerLabel;
      trigger.setAttribute("aria-describedby", "tip-" + Math.random().toString(36).slice(2, 7));

      const tip = document.createElement("span");
      tip.className = "c-tooltip";
      tip.textContent = text;
      tip.setAttribute("role", "tooltip");
      tip.id = trigger.getAttribute("aria-describedby");

      function show(reason) {
        tip.classList.add("is-visible");
        log("show (" + reason + "): " + text);
      }
      function hide(reason) {
        tip.classList.remove("is-visible");
        log("hide (" + reason + ")");
      }

      trigger.addEventListener("mouseenter", () => show("hover"));
      trigger.addEventListener("mouseleave", () => hide("hover"));
      trigger.addEventListener("focus", () => show("focus"));
      trigger.addEventListener("blur", () => hide("focus"));

      wrap.append(trigger, tip);

      return { el: wrap, show: () => show("api"), hide: () => hide("api") };
    }

    const mount = document.getElementById("mount");
    mount.append(
      createTooltip({ triggerLabel: "Save", text: "Save changes to disk" }).el,
      createTooltip({ triggerLabel: "Info", text: "More details available" }).el
    );
