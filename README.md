# Keishon Rose Portfolio

A GitHub Pages-ready interactive portfolio built with semantic HTML, CSS, vanilla JavaScript, and Three.js.

## Publish on GitHub Pages

1. Create or open your `username.github.io` repository.
2. Copy all files from this folder into the repository root.
3. Replace `YOUR_EMAIL_HERE` in `index.html` with your email address.
4. Commit and push to the `main` branch.
5. In GitHub: **Settings → Pages → Deploy from a branch → main / root**.

## Customize projects

Project content lives in the `projects` array near the top of `app.js`. Each project supports:

- title and summary
- specialties/categories
- problem, approach, result, and reflection
- tools and methods
- screenshots
- a 3D model state (`software`, `data`, `policy`, or `strategy`)

## Important next additions

- Add your email and social links.
- Add a downloadable résumé.
- Add public GitHub repository links where available.
- Replace or expand project summaries when source files are available.
- Add screenshots from KRPhotoApp and CohortFlow.

## Local preview

Because the site uses ES modules, preview it through a local server rather than double-clicking the HTML file.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
