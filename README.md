# Prateek Chandra · Portfolio

Personal portfolio website of **Prateek Kumar Chandra**, aspiring **AI Product Manager**.
It presents my product thinking, AI fluency, case studies and experience in a clean, uncluttered layout.

🔗 **Live site:** https://freelansprateek-tech.github.io  <!-- update if you use a different repo name -->

## Sections

| Section | What it shows |
| --- | --- |
| Home | Black-and-white portrait with a sliding "Aspiring AI Product Manager" headline |
| About | Short intro on how I approach product problems |
| Skills | Product thinking first, backed by AI fluency |
| All skills page | Every skill grouped by area (opens at `#all-skills`) |
| Selected Work | Product case studies that open as Problem → Users → What I did → Outcome |
| Experience | Internship, placement committee, hackathons, leadership |
| Contact | Email, phone, LinkedIn and GitHub |

## Tech

Plain **HTML, CSS and JavaScript**. No framework, no build step, no dependencies.
Fonts: DM Sans and DM Mono from Google Fonts.

## Project structure

```
Portfolio/
├── index.html              # page content and structure
├── css/
│   └── style.css           # all styling (colors and fonts are tokens at the top)
├── js/
│   └── main.js             # case-study popups, copy-email, nav highlight, all-skills page
├── assets/
│   └── images/
│       └── prateek.webp    # portrait (background removed, black & white)
├── .gitignore
└── README.md
```

## Run locally

Just open `index.html` in a browser.
In VS Code you can also install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server** to see changes as you save.

## Editing guide

- **Text and sections:** `index.html`
- **Case-study popups:** the `CASES` object at the top of `js/main.js`
- **Colors and fonts:** the `:root` block at the top of `css/style.css` (e.g. `--accent` is the blue)
- **Photo:** replace `assets/images/prateek.webp` with a new image of the same name

## Deploy (GitHub Pages)

1. Push this folder to a public GitHub repository.
2. Repository **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`** → Save.
3. The site goes live in 1–2 minutes. Naming the repo `<username>.github.io` makes it live at `https://<username>.github.io`.

## Contact

- Email: prateek2033@gmail.com
- LinkedIn: [prateek-chandra](https://www.linkedin.com/in/prateek-chandra-17a46236a)
- GitHub: [freelansprateek-tech](https://github.com/freelansprateek-tech)

---
© 2026 Prateek Kumar Chandra
