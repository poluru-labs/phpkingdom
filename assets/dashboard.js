const courseNav = document.getElementById("courseNav");
const courseGrid = document.getElementById("courseGrid");
const statsRow = document.getElementById("statsRow");
const homeView = document.getElementById("homeView");
const courseView = document.getElementById("courseView");
const courseBody = document.getElementById("courseBody");
const courseMeta = document.getElementById("courseMeta");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const courseFilter = document.getElementById("courseFilter");
const exampleFilter = document.getElementById("exampleFilter");
const sidebar = document.getElementById("sidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

const courseCache = new Map();
let catalog = null;
let activeCourseId = null;

function formatCount(n) {
  return new Intl.NumberFormat("en-US").format(n);
}

function closeMobileSidebar() {
  sidebar.classList.remove("open");
  sidebarBackdrop.hidden = true;
}

function openMobileSidebar() {
  sidebar.classList.add("open");
  sidebarBackdrop.hidden = false;
}

document.getElementById("sidebarOpen")?.addEventListener("click", openMobileSidebar);
document.getElementById("sidebarClose")?.addEventListener("click", closeMobileSidebar);
sidebarBackdrop?.addEventListener("click", closeMobileSidebar);
document.getElementById("backHome")?.addEventListener("click", () => showHome());

function renderStats() {
  statsRow.innerHTML = `
    <div class="pk-stat">
      <span class="label">Courses</span>
      <div class="value"><span>${formatCount(catalog.courseCount)}</span></div>
    </div>
    <div class="pk-stat">
      <span class="label">Topics</span>
      <div class="value">${formatCount(catalog.topicCount)}</div>
    </div>
    <div class="pk-stat">
      <span class="label">Examples</span>
      <div class="value">${formatCount(catalog.exampleCount)}</div>
    </div>
  `;
}

function courseMatchesFilter(course, q) {
  if (!q) return true;
  return (
    course.label.toLowerCase().includes(q) ||
    course.id.toLowerCase().includes(q)
  );
}

function renderCourseNav(filter = "") {
  const q = filter.trim().toLowerCase();
  const items = catalog.courses.filter((c) => courseMatchesFilter(c, q));

  if (!items.length) {
    courseNav.innerHTML = `<div class="pk-empty small">No courses match.</div>`;
    return;
  }

  courseNav.innerHTML = items
    .map(
      (c) => `
      <button
        type="button"
        class="pk-nav-item${c.id === activeCourseId ? " active" : ""}"
        data-course="${c.id}"
        title="${c.label}"
      >
        <i class="${c.icon}" aria-hidden="true"></i>
        <span class="pk-nav-label">${c.label}</span>
        <span class="pk-nav-count">${formatCount(c.exampleCount)}</span>
      </button>
    `,
    )
    .join("");

  courseNav.querySelectorAll("[data-course]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openCourse(btn.dataset.course);
      closeMobileSidebar();
    });
  });
}

function renderCourseGrid(filter = "") {
  const q = filter.trim().toLowerCase();
  const items = catalog.courses.filter((c) => courseMatchesFilter(c, q));

  courseGrid.innerHTML = items
    .map(
      (c) => `
      <button type="button" class="pk-course-tile" data-course="${c.id}">
        <i class="${c.icon}" aria-hidden="true"></i>
        <strong>${c.label}</strong>
        <span class="meta">
          ${formatCount(c.sectionCount)} sections ·
          ${formatCount(c.topicCount)} topics ·
          ${formatCount(c.exampleCount)} examples
        </span>
      </button>
    `,
    )
    .join("");

  courseGrid.querySelectorAll("[data-course]").forEach((btn) => {
    btn.addEventListener("click", () => openCourse(btn.dataset.course));
  });
}

function showHome() {
  activeCourseId = null;
  homeView.classList.remove("d-none");
  courseView.classList.add("d-none");
  pageTitle.textContent = "All Courses";
  pageSubtitle.textContent =
    "Browse every tutorial example. Links open in a new tab.";
  exampleFilter.value = "";
  exampleFilter.disabled = true;
  renderCourseNav(courseFilter.value);
  history.replaceState(null, "", "./");
}

async function loadCourse(id) {
  if (courseCache.has(id)) return courseCache.get(id);
  const res = await fetch(`data/courses/${id}.json`);
  if (!res.ok) throw new Error(`Failed to load course ${id}`);
  const data = await res.json();
  courseCache.set(id, data);
  return data;
}

function exampleMatches(example, q) {
  if (!q) return true;
  return (
    example.title.toLowerCase().includes(q) ||
    example.href.toLowerCase().includes(q)
  );
}

function renderCourse(course, filter = "") {
  const q = filter.trim().toLowerCase();
  courseMeta.innerHTML = `
    <i class="${course.icon}" aria-hidden="true"></i>
    <span>
      <strong class="text-dark">${course.label}</strong>
      · ${formatCount(course.sections.length)} sections
      · ${formatCount(course.topicCount)} topics
      · ${formatCount(course.exampleCount)} examples
    </span>
  `;

  const sectionsHtml = course.sections
    .map((section, sIdx) => {
      const topicsHtml = section.topics
        .map((topic, tIdx) => {
          const filteredBuckets = topic.buckets
            .map((bucket) => ({
              ...bucket,
              examples: bucket.examples.filter((ex) => exampleMatches(ex, q)),
            }))
            .filter((b) => b.examples.length);

          if (!filteredBuckets.length) return "";

          const openClass = q ? " open" : tIdx === 0 && sIdx === 0 ? " open" : "";
          const lists = filteredBuckets
            .map(
              (bucket) => `
              <div class="pk-bucket-label">${bucket.label}</div>
              <ul class="pk-example-list">
                ${bucket.examples
                  .map(
                    (ex) => `
                    <li>
                      <a href="${ex.href}" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-file-earmark-code" aria-hidden="true"></i>
                        <span>${ex.title}</span>
                        <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                      </a>
                    </li>
                  `,
                  )
                  .join("")}
              </ul>
            `,
            )
            .join("");

          return `
            <div class="pk-topic${openClass}" data-topic>
              <button type="button" class="pk-topic-toggle">
                <span>${topic.title}</span>
                <i class="bi bi-chevron-down" aria-hidden="true"></i>
              </button>
              <div class="pk-topic-body">${lists}</div>
            </div>
          `;
        })
        .filter(Boolean)
        .join("");

      if (!topicsHtml) return "";

      const sectionOpen = q || sIdx === 0 ? " open" : "";
      return `
        <div class="pk-section${sectionOpen}" data-section>
          <button type="button" class="pk-section-toggle">
            <i class="bi bi-chevron-right" aria-hidden="true"></i>
            <span>${section.title}</span>
            <span class="ms-auto small text-secondary fw-semibold">
              ${section.topics.length} topics
            </span>
          </button>
          <div class="pk-section-body">${topicsHtml}</div>
        </div>
      `;
    })
    .filter(Boolean)
    .join("");

  courseBody.innerHTML =
    sectionsHtml ||
    `<div class="pk-empty">No examples match “${filter.trim()}”.</div>`;

  courseBody.querySelectorAll(".pk-section-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest("[data-section]")?.classList.toggle("open");
    });
  });

  courseBody.querySelectorAll(".pk-topic-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest("[data-topic]")?.classList.toggle("open");
    });
  });
}

async function openCourse(id) {
  try {
    pageSubtitle.textContent = "Loading course…";
    const course = await loadCourse(id);
    activeCourseId = id;
    homeView.classList.add("d-none");
    courseView.classList.remove("d-none");
    pageTitle.textContent = course.label;
    pageSubtitle.textContent =
      "Expand a section, then open any example in a new tab.";
    exampleFilter.disabled = false;
    exampleFilter.value = "";
    renderCourse(course);
    renderCourseNav(courseFilter.value);
    history.replaceState(null, "", `#${id}`);
  } catch (err) {
    console.error(err);
    courseBody.innerHTML = `<div class="pk-empty text-danger">Could not load this course. Run <code>npm run generate</code> first.</div>`;
    homeView.classList.add("d-none");
    courseView.classList.remove("d-none");
  }
}

courseFilter.addEventListener("input", () => {
  const q = courseFilter.value;
  renderCourseNav(q);
  if (!activeCourseId) renderCourseGrid(q);
});

exampleFilter.addEventListener("input", async () => {
  if (!activeCourseId) return;
  const course = await loadCourse(activeCourseId);
  renderCourse(course, exampleFilter.value);
});

async function boot() {
  try {
    const res = await fetch("data/catalog.json");
    if (!res.ok) throw new Error("catalog missing");
    catalog = await res.json();
    renderStats();
    renderCourseNav();
    renderCourseGrid();

    const hash = location.hash.replace(/^#/, "");
    if (hash && catalog.courses.some((c) => c.id === hash)) {
      await openCourse(hash);
    }
  } catch (err) {
    console.error(err);
    courseNav.innerHTML = "";
    courseGrid.innerHTML = `
      <div class="pk-empty">
        Catalog not found. From the repo root run:<br />
        <code>npm install && npm run generate && npm run dev</code>
      </div>
    `;
  }
}

boot();
