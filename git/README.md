# Git Tutorials

Generated tutorial content for phpkingdom.com.

- Author: Subrahmanyam Poluru
- Email: mail.polurus@gmail.com
- Website: polurus.com
- Sections: 50
- Topics: 253
- Files per topic: 25 examples, 25 exercises, 25 templates

Examples are topic-aware (init, branch, merge, rebase, hooks, LFS, worktrees, gh, CI, and more).

Folder pattern:

- `01-section-name/01-topic-slug/examples`
- `01-section-name/01-topic-slug/exercises`
- `01-section-name/01-topic-slug/templates`

Every HTML file includes the requested metadata comment block at the top.

Regenerate with:

```bash
python3 generate_git_tutorials.py
python3 generate_git_extra.py
```

## Course practice packs

- [`51-Exercises/`](51-Exercises/index.html) — 25 Problem → Solution Git drills
- [`52-Templates/`](52-Templates/index.html) — 25 unique Git workflow starter templates

Regenerate practice packs with:

```bash
python3 generate_git_extra.py
```
