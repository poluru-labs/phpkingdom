const logEl = document.getElementById("log");
    function log(msg) { logEl.textContent = msg; }

    function createPagination({ totalPages = 10, page = 1, siblingCount = 1 } = {}) {
      let current = page;

      const wrap = document.createElement("nav");
      wrap.className = "c-pagination";
      wrap.setAttribute("aria-label", "Pagination");

      const info = document.createElement("div");
      info.className = "c-pagination__info";

      const controls = document.createElement("div");
      controls.style.display = "flex";
      controls.style.flexWrap = "wrap";
      controls.style.gap = "0.35rem";

      function pageRange() {
        const pages = [];
        const left = Math.max(1, current - siblingCount);
        const right = Math.min(totalPages, current + siblingCount);

        if (left > 1) {
          pages.push(1);
          if (left > 2) pages.push("…");
        }
        for (let i = left; i <= right; i++) pages.push(i);
        if (right < totalPages) {
          if (right < totalPages - 1) pages.push("…");
          pages.push(totalPages);
        }
        return pages;
      }

      function goTo(p) {
        if (p < 1 || p > totalPages || p === current) return;
        current = p;
        render();
        log("page: " + current + " / " + totalPages);
      }

      function makeBtn(label, opts = {}) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "c-pagination__btn";
        btn.textContent = label;
        if (opts.active) btn.classList.add("is-active");
        if (opts.disabled) btn.disabled = true;
        if (opts.page) btn.addEventListener("click", () => goTo(opts.page));
        if (opts.aria) btn.setAttribute("aria-current", "page");
        return btn;
      }

      function render() {
        info.textContent = "Page " + current + " of " + totalPages;
        controls.innerHTML = "";

        controls.appendChild(makeBtn("‹", { disabled: current === 1, page: current - 1 }));

        pageRange().forEach((p) => {
          if (p === "…") {
            const span = document.createElement("span");
            span.className = "c-pagination__ellipsis";
            span.textContent = "…";
            controls.appendChild(span);
          } else {
            controls.appendChild(makeBtn(String(p), {
              page: p,
              active: p === current,
              aria: p === current
            }));
          }
        });

        controls.appendChild(makeBtn("›", { disabled: current === totalPages, page: current + 1 }));
      }

      render();
      wrap.append(info, controls);

      return {
        el: wrap,
        get page() { return current; },
        goTo
      };
    }

    document.getElementById("mount").appendChild(createPagination({ totalPages: 12, page: 5 }).el);
