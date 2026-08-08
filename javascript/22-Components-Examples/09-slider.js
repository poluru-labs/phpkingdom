const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createSlider({ label = "Volume", min = 0, max = 100, value = 50, step = 1 } = {}) {
      const wrap = document.createElement("div");
      wrap.className = "c-slider";

      const header = document.createElement("div");
      header.className = "c-slider__header";
      const lbl = document.createElement("span");
      lbl.textContent = label;
      const valDisplay = document.createElement("span");
      valDisplay.className = "c-slider__value";
      valDisplay.textContent = value;
      header.append(lbl, valDisplay);

      const input = document.createElement("input");
      input.type = "range";
      input.className = "c-slider__input";
      input.min = min;
      input.max = max;
      input.step = step;
      input.value = value;

      const ticks = document.createElement("div");
      ticks.className = "c-slider__ticks";
      ticks.innerHTML = "<span>" + min + "</span><span>" + max + "</span>";

      input.addEventListener("input", () => {
        valDisplay.textContent = input.value;
        log("input: " + input.value);
      });
      input.addEventListener("change", () => log("change: " + input.value));

      wrap.append(header, input, ticks);

      return {
        el: wrap,
        get value() { return Number(input.value); },
        set value(v) { input.value = v; valDisplay.textContent = v; }
      };
    }

    document.getElementById("mount").appendChild(createSlider({ label: "Volume", value: 65 }).el);
