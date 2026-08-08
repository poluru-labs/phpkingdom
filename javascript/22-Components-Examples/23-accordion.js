const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createAccordion({ items = [], allowMultiple = false } = {}) {
      const openSet = new Set();
      const wrap = document.createElement("div");
      wrap.className = "c-accordion";

      items.forEach((item, i) => {
        const section = document.createElement("div");
        section.className = "c-accordion__item";

        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "c-accordion__trigger";
        trigger.setAttribute("aria-expanded", "false");
        trigger.id = "acc-trigger-" + i;

        const title = document.createElement("span");
        title.textContent = item.title;
        const icon = document.createElement("span");
        icon.className = "c-accordion__icon";
        icon.textContent = "▾";
        trigger.append(title, icon);

        const panel = document.createElement("div");
        panel.className = "c-accordion__panel";
        panel.hidden = true;
        panel.id = "acc-panel-" + i;
        panel.setAttribute("role", "region");
        panel.setAttribute("aria-labelledby", trigger.id);
        panel.textContent = item.content;

        trigger.addEventListener("click", () => {
          const isOpen = openSet.has(i);
          if (!allowMultiple) openSet.clear();
          if (isOpen) openSet.delete(i);
          else openSet.add(i);
          render();
          log((isOpen ? "collapse" : "expand") + ": " + item.title);
        });

        section.append(trigger, panel);
        wrap.appendChild(section);
      });

      function render() {
        wrap.querySelectorAll(".c-accordion__trigger").forEach((tr, i) => {
          const open = openSet.has(i);
          tr.setAttribute("aria-expanded", open ? "true" : "false");
          tr.nextElementSibling.hidden = !open;
        });
      }

      return { el: wrap, open: (i) => { if (!allowMultiple) openSet.clear(); openSet.add(i); render(); } };
    }

    document.getElementById("mount").appendChild(createAccordion({
      items: [
        { title: "What is vanilla JS?", content: "Plain JavaScript without frameworks — ideal for learning how UI primitives work under the hood." },
        { title: "Why factory functions?", content: "They encapsulate DOM creation and return a small public API (el, methods) without classes or build tools." },
        { title: "Accessibility tips", content: "Use roles, aria-expanded, keyboard handlers, and focus management for overlays and menus." }
      ]
    }).el);
