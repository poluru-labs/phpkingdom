# Design System Tutorials

Generated tutorial content for phpkingdom.com.

- Author: Subrahmanyam Poluru
- Email: mail.polurus@gmail.com
- Website: polurus.com
- Sections: 34
- Topics: 176
- Files per topic: 25 examples, 25 exercises, 25 templates

Examples are topic-aware (tokens, color, type, components, a11y, Figma, Storybook, React/Lit, theming, governance, Style Dictionary, Tailwind, Radix, shadcn, Chromatic, density, etc.).

Folder pattern:

- `01-section-name/01-topic-slug/examples`
- `01-section-name/01-topic-slug/exercises`
- `01-section-name/01-topic-slug/templates`

Every HTML file includes the requested metadata comment block at the top.

Regenerate with:

```bash
python3 generate_ds_tutorials.py
python3 generate_ds_extra.py
```

## Course practice packs

- [`35-Exercises/`](35-Exercises/index.html) — 25 Problem → Solution design-system drills
- [`36-Templates/`](36-Templates/index.html) — 25 design-system starter templates

Regenerate practice packs with:

```bash
python3 generate_ds_extra.py
```
