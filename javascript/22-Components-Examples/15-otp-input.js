const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createOtpInput({ length = 6, label = "Verification code" } = {}) {
      const wrap = document.createElement("div");
      wrap.className = "c-otp";

      const lbl = document.createElement("div");
      lbl.className = "field-label";
      lbl.textContent = label;

      const fields = document.createElement("div");
      fields.className = "c-otp__fields";
      fields.setAttribute("role", "group");

      const inputs = [];
      for (let i = 0; i < length; i++) {
        const inp = document.createElement("input");
        inp.type = "text";
        inp.inputMode = "numeric";
        inp.maxLength = 1;
        inp.className = "c-otp__digit";
        inp.setAttribute("aria-label", "Digit " + (i + 1));
        inputs.push(inp);
        fields.appendChild(inp);
      }

      function getValue() {
        return inputs.map((i) => i.value).join("");
      }

      function emit() {
        const v = getValue();
        log("value: \"" + v + "\" (" + v.length + "/" + length + ")");
        if (v.length === length) log("complete: " + v);
      }

      inputs.forEach((inp, idx) => {
        inp.addEventListener("input", () => {
          inp.value = inp.value.replace(/\D/g, "").slice(-1);
          if (inp.value && idx < length - 1) inputs[idx + 1].focus();
          emit();
        });

        inp.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" && !inp.value && idx > 0) {
            inputs[idx - 1].focus();
            inputs[idx - 1].value = "";
            emit();
          }
        });

        inp.addEventListener("paste", (e) => {
          e.preventDefault();
          const pasted = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, length);
          pasted.split("").forEach((ch, i) => { inputs[i].value = ch; });
          const focusIdx = Math.min(pasted.length, length - 1);
          inputs[focusIdx].focus();
          log("paste: \"" + pasted + "\"");
          emit();
        });
      });

      wrap.append(lbl, fields);

      return {
        el: wrap,
        get value() { return getValue(); },
        clear() { inputs.forEach((i) => { i.value = ""; }); inputs[0].focus(); emit(); },
        focus() { inputs[0].focus(); }
      };
    }

    document.getElementById("mount").appendChild(createOtpInput({}).el);
