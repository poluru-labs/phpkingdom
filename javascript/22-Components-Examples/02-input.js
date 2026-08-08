const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createInput({ label = "Email", placeholder = "you@example.com", clearable = true, validate } = {}) {
      const wrap = document.createElement("label");
      wrap.className = "input-wrap field-label";
      wrap.textContent = label;

      const inner = document.createElement("div");
      inner.className = "input-inner";

      const input = document.createElement("input");
      input.type = "text";
      input.className = "c-input";
      input.placeholder = placeholder;

      const error = document.createElement("span");
      error.className = "input-error";
      error.hidden = true;

      let clearBtn;
      if (clearable) {
        clearBtn = document.createElement("button");
        clearBtn.type = "button";
        clearBtn.className = "input-clear";
        clearBtn.textContent = "×";
        clearBtn.hidden = true;
        clearBtn.setAttribute("aria-label", "Clear");
        clearBtn.addEventListener("click", () => {
          input.value = "";
          clearBtn.hidden = true;
          wrap.classList.remove("is-invalid");
          error.hidden = true;
          input.focus();
          log("cleared");
        });
      }

      function runValidate() {
        if (!validate) return true;
        const result = validate(input.value);
        const ok = result === true;
        wrap.classList.toggle("is-invalid", !ok);
        if (typeof result === "string") {
          error.textContent = result;
          error.hidden = ok;
        }
        return ok;
      }

      input.addEventListener("input", () => {
        if (clearBtn) clearBtn.hidden = !input.value;
        runValidate();
        log("input: \"" + input.value + "\"");
      });
      input.addEventListener("blur", () => {
        const ok = runValidate();
        log("blur: value=\"" + input.value + "\" valid=" + ok);
      });

      inner.appendChild(input);
      if (clearBtn) inner.appendChild(clearBtn);
      wrap.appendChild(inner);
      wrap.appendChild(error);

      return {
        el: wrap,
        get value() { return input.value; },
        set value(v) {
          input.value = v;
          if (clearBtn) clearBtn.hidden = !v;
        },
        focus() { input.focus(); }
      };
    }

    document.getElementById("mount").appendChild(
      createInput({
        validate: (v) => {
          if (!v) return "Email is required.";
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email.";
        }
      }).el
    );
