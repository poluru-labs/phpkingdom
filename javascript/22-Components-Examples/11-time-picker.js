const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createTimePicker({ label = "Time", hours = 9, minutes = 30 } = {}) {
      let h = hours;
      let m = minutes;

      const wrap = document.createElement("div");
      wrap.className = "c-timepicker";

      const lbl = document.createElement("div");
      lbl.className = "field-label";
      lbl.textContent = label;

      const row = document.createElement("div");
      row.className = "c-timepicker__row";

      function pad(n) { return String(n).padStart(2, "0"); }

      function emit() { log("change: " + pad(h) + ":" + pad(m)); }

      function makeSpin(part, get, set, max) {
        const field = document.createElement("div");
        field.className = "c-timepicker__field";
        const sub = document.createElement("label");
        sub.textContent = part;
        const spin = document.createElement("div");
        spin.className = "c-timepicker__spin";
        const up = document.createElement("button");
        up.type = "button";
        up.textContent = "▲";
        const val = document.createElement("span");
        val.className = "c-timepicker__value";
        val.textContent = pad(get());
        const down = document.createElement("button");
        down.type = "button";
        down.textContent = "▼";
        up.addEventListener("click", () => { set((get() + 1) % (max + 1)); val.textContent = pad(get()); emit(); });
        down.addEventListener("click", () => { set((get() - 1 + max + 1) % (max + 1)); val.textContent = pad(get()); emit(); });
        spin.append(up, val, down);
        field.append(sub, spin);
        return { field, update: () => { val.textContent = pad(get()); } };
      }

      const hoursSpin = makeSpin("Hours", () => h, (v) => { h = v; }, 23);
      const sep = document.createElement("span");
      sep.className = "c-timepicker__sep";
      sep.textContent = ":";
      const minsSpin = makeSpin("Minutes", () => m, (v) => { m = v; }, 59);

      row.append(hoursSpin.field, sep, minsSpin.field);
      wrap.append(lbl, row);

      return {
        el: wrap,
        get value() { return pad(h) + ":" + pad(m); },
        set value(v) {
          const [hh, mm] = v.split(":").map(Number);
          h = hh; m = mm;
          hoursSpin.update(); minsSpin.update();
        }
      };
    }

    document.getElementById("mount").appendChild(createTimePicker({}).el);
