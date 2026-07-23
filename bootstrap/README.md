# Bootstrap Tutorials

Tutorial content for **phpkingdom.com**.

- Author: Subrahmanyam Poluru
- Email: mail.polurus@gmail.com
- Website: polurus.com

## Layout

- `01-basics` … `11-advanced` — topic examples (typically 5+ HTML lessons per topic)
- `12-Exercises` — 25 Problem → Solution drills
- `13-Templates` — 25 branded Bootstrap landing-page starters

Every HTML file includes the metadata comment block (`sitename`, author, email, `autor website`) and loads Bootstrap **5.3.3** from the CDN.

Course navigation metadata: `course-index.json` (hrefs under `/tutorials/bootstrap/…`).

## Upgrade / regenerate indexes

```bash
python3 upgrade_bootstrap.py
```

The script **adds** missing lessons and topics; it does not overwrite existing lesson HTML.

Last upgrade added ~0 files; course topics now include **60** topics and **300** lesson HTML examples (excluding exercises/templates).
