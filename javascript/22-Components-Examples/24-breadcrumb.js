const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createBreadcrumb({ items = [] } = {}) {
      const nav = document.createElement("nav");
      nav.setAttribute("aria-label", "Breadcrumb");

      const list = document.createElement("ol");
      list.className = "c-breadcrumb";

      function render() {
        list.innerHTML = "";
        items.forEach((item, i) => {
          const li = document.createElement("li");
          li.className = "c-breadcrumb__item";

          if (i < items.length - 1) {
            const link = document.createElement("button");
            link.type = "button";
            link.className = "c-breadcrumb__link";
            link.textContent = item.label;
            link.addEventListener("click", () => {
              log("navigate: " + item.label + (item.href ? " → " + item.href : ""));
            });
            li.appendChild(link);
          } else {
            const current = document.createElement("span");
            current.className = "c-breadcrumb__current";
            current.setAttribute("aria-current", "page");
            current.textContent = item.label;
            li.appendChild(current);
          }
          list.appendChild(li);
        });
      }

      render();
      nav.appendChild(list);

      return {
        el: nav,
        setItems(newItems) { items = newItems; render(); }
      };
    }

    document.getElementById("mount").appendChild(createBreadcrumb({
      items: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Components", href: "/projects/components" },
        { label: "Button" }
      ]
    }).el);
