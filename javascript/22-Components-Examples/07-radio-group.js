const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createRadioGroup({ legend = "Plan", name = "plan", options = [], value = null } = {}) {
      let selected = value ?? options[0]?.value ?? null;
      const fieldset = document.createElement("fieldset");
      fieldset.className = "c-radio-group";

      const leg = document.createElement("legend");
      leg.textContent = legend;
      fieldset.appendChild(leg);

      const inputs = options.map((opt) => {
        const label = document.createElement("label");
        label.className = "c-radio";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = name;
        input.value = opt.value;
        input.checked = opt.value === selected;
        const span = document.createElement("span");
        span.textContent = opt.label;
        input.addEventListener("change", () => {
          if (input.checked) {
            selected = opt.value;
            log("change: " + opt.label + " (" + opt.value + ")");
          }
        });
        label.append(input, span);
        fieldset.appendChild(label);
        return input;
      });

      return {
        el: fieldset,
        get value() { return selected; },
        set value(v) {
          selected = v;
          inputs.forEach((inp) => { inp.checked = inp.value === v; });
        }
      };
    }

    document.getElementById("mount").appendChild(createRadioGroup({
      options: [
        { label: "Free — $0/mo", value: "free" },
        { label: "Pro — $12/mo", value: "pro" },
        { label: "Team — $29/mo", value: "team" }
      ]
    }).el);
