# Sass and SCSS Tutorials

Generated tutorial content for phpkingdom.com.

- Author: Subrahmanyam Poluru
- Email: mail.polurus@gmail.com
- Website: polurus.com
- Sections: 10
- Topics: 50
- Files per topic: 25 examples, 25 exercises, 25 templates

Examples are topic-aware (`@use`, mixins, maps, loops, breakpoints, container queries, etc.).

Folder pattern:

- `01-section-name/01-topic-slug/examples`
- `01-section-name/01-topic-slug/exercises`
- `01-section-name/01-topic-slug/templates`

Every HTML file includes the requested metadata comment block at the top.

Regenerate with:

```bash
python3 generate_sass_tutorials.py
python3 generate_sass_extra.py
```

## Course practice packs

- [`11-Exercises/`](11-Exercises/index.html) — 25 Problem → Solution Sass drills
- [`12-Templates/`](12-Templates/index.html) — 25 Sass-token landing page starters

Regenerate practice packs with:

```bash
python3 generate_sass_extra.py
```
