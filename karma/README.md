# Karma Tutorials

Generated tutorial content for phpkingdom.com.

- Author: Subrahmanyam Poluru
- Email: mail.polurus@gmail.com
- Website: polurus.com
- Sections: 11
- Topics: 59
- Files per topic: 25 examples, 25 exercises, 25 templates

Examples are topic-aware (karma.conf.js, Jasmine/Mocha, launchers, coverage, Angular TestBed, CI, etc.).

Folder pattern:

- `01-section-name/01-topic-slug/examples`
- `01-section-name/01-topic-slug/exercises`
- `01-section-name/01-topic-slug/templates`

Every HTML file includes the requested metadata comment block at the top.

Regenerate with:

```bash
python3 generate_karma_tutorials.py
python3 generate_karma_extra.py
```

## Course practice packs

- [`12-Exercises/`](12-Exercises/index.html) — 25 Problem → Solution Karma drills
- [`13-Templates/`](13-Templates/index.html) — 25 unique Karma starter templates

Regenerate practice packs with:

```bash
python3 generate_karma_extra.py
```
