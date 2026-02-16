# Jamilla Akhund-Zade · Personal site

Personal site built with [Eleventy](https://www.11ty.dev/) (11ty). Node.js only — no Ruby or Jekyll.

## Run locally (Mac)

1. **Install Node.js** (LTS, e.g. 20.x): [nodejs.org](https://nodejs.org/) or `brew install node`.  
   If you see `dyld: Library not loaded` or ICU errors, use a current LTS version.

2. **Install and serve:**
   ```bash
   npm install
   npm run serve
   ```
3. **Open:** [http://localhost:8080](http://localhost:8080)

- **Build only:** `npm run build` → output in `_site/`

## Edit content

- **Home:** `index.njk`
- **About:** `about.njk`
- **PhD work:** `phd.njk`
- **Projects (blog):** `project.njk` (index) and `projects/*.md` (individual posts)
- **Styles:** `css/style.css`  
- **Layout:** `_includes/layout.njk`

## Deploy to GitHub Pages

1. **Settings → Pages** → set **Source** to **GitHub Actions**.
2. **On push:** Pushing to `main` or `master` runs the workflow and deploys `_site/`.
3. **Manual deploy:** **Actions** → **Deploy to GitHub Pages** → **Run workflow** → choose branch → **Run workflow**.

Site: **https://jamilla-az.github.io/**
