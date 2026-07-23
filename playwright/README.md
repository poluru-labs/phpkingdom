# Playwright Tutorials

Generated tutorial content for phpkingdom.com.

- Author: Subrahmanyam Poluru
- Email: mail.polurus@gmail.com
- Website: polurus.com
- Sections: 14
- Topics: 70 (topic-aware Playwright/TypeScript snippets per slug)
- Fixtures and Data topics: 5
- Interview topics: 5
- Files per topic: 25 examples, 25 exercises, 25 templates

Folder pattern (matches Sass / Cypress):

- `01-section-name/01-topic-slug/examples`
- `01-section-name/01-topic-slug/exercises`
- `01-section-name/01-topic-slug/templates`

Every HTML file includes the requested metadata comment block at the top.
Spec samples come from `_topic_snippets.py` (matched by topic slug, longest keyword first).

Regenerate with:

```bash
python3 generate_playwright_tutorials.py
python3 generate_playwright_extra.py
```

## Course practice packs

- [`15-Exercises/`](15-Exercises/index.html) — 25 Problem → Solution Playwright drills
- [`16-Templates/`](16-Templates/index.html) — 25 unique Playwright starter templates (login, route mock, storageState, a11y, visual, CI, POM, …)

Regenerate practice packs with:

```bash
python3 generate_playwright_extra.py
```
