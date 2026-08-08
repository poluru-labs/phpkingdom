const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createContextMenu({ targetText = "Right-click here", items = [] } = {}) {
      const target = document.createElement("div");
      target.className = "c-ctx-target";
      target.textContent = targetText;

      const menu = document.createElement("ul");
      menu.className = "c-ctx-menu";
      menu.setAttribute("role", "menu");
      menu.hidden = true;
      document.body.appendChild(menu);

      function close() {
        menu.hidden = true;
      }

      function open(x, y) {
        menu.hidden = false;
        const maxX = window.innerWidth - menu.offsetWidth - 8;
        const maxY = window.innerHeight - menu.offsetHeight - 8;
        menu.style.left = Math.min(x, maxX) + "px";
        menu.style.top = Math.min(y, maxY) + "px";
        log("open at (" + Math.round(x) + ", " + Math.round(y) + ")");
      }

      menu.innerHTML = "";
      items.forEach((item) => {
        const li = document.createElement("li");
        li.setAttribute("role", "none");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "c-ctx-menu__item";
        btn.setAttribute("role", "menuitem");
        btn.textContent = item.label;
        btn.addEventListener("click", () => {
          close();
          log("select: " + item.label);
        });
        li.appendChild(btn);
        menu.appendChild(li);
      });

      target.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        open(e.clientX, e.clientY);
      });

      document.addEventListener("click", close);
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
      window.addEventListener("scroll", close, true);
      window.addEventListener("resize", close);

      return { el: target, close, menu };
    }

    document.getElementById("mount").appendChild(createContextMenu({
      items: [
        { label: "Copy" },
        { label: "Paste" },
        { label: "Rename" },
        { label: "Delete" }
      ]
    }).el);
