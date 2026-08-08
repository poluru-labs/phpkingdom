const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createCheckbox({ label = "Option", checked = false, indeterminate = false } = {}) {
      const el = document.createElement("label");
      el.className = "c-check";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = checked;
      input.indeterminate = indeterminate;

      const span = document.createElement("span");
      span.textContent = label;

      input.addEventListener("change", () => {
        input.indeterminate = false;
        log("change: " + label + " → " + (input.checked ? "checked" : "unchecked"));
      });

      el.append(input, span);

      return {
        el,
        get checked() { return input.checked; },
        set checked(v) { input.checked = v; input.indeterminate = false; },
        set indeterminate(v) { input.indeterminate = v; },
        get input() { return input; }
      };
    }

    const mount = document.getElementById("mount");
    const parent = createCheckbox({ label: "Select all items", indeterminate: true });
    const child1 = createCheckbox({ label: "Item A", checked: true });
    const child2 = createCheckbox({ label: "Item B" });
    const child3 = createCheckbox({ label: "Item C", checked: true });

    function syncParent() {
      const children = [child1, child2, child3];
      const checkedCount = children.filter((c) => c.checked).length;
      parent.checked = checkedCount === children.length;
      parent.indeterminate = checkedCount > 0 && checkedCount < children.length;
    }

    [child1, child2, child3].forEach((c) => {
      c.input.addEventListener("change", syncParent);
    });
    parent.input.addEventListener("change", () => {
      const v = parent.checked;
      [child1, child2, child3].forEach((c) => { c.checked = v; });
      parent.indeterminate = false;
      log("select all → " + v);
    });

    mount.append(parent.el, child1.el, child2.el, child3.el);
