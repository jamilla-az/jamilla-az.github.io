# Jamilla Akhund-Zade · Personal site

Personal site built with [Eleventy](https://www.11ty.dev/) (11ty). No Ruby or Jekyll — runs on Node.js, so it works on your Mac without gem or native build issues.

## On your Mac

1. **Install Node.js** (if you don’t have it):  
   [nodejs.org](https://nodejs.org/) (LTS, e.g. 20.x) or `brew install node`.  
   If you see `dyld: Library not loaded` or ICU errors, your Node is too old — install a current LTS version.

2. **Install dependencies and run the site:**
   ```bash
   npm install
   npm run serve
   ```
3. **Open in your browser:**  
   [http://localhost:8080](http://localhost:8080)

- **Build only (no server):** `npm run build` → output in `_site/`
- **Edit content:** `index.njk` (home), `about.njk`, `project.njk`. Styles in `css/style.css`.

## Deploy to GitHub Pages

1. In the repo: **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` (or `master`). The workflow builds Eleventy and deploys `_site/` to GitHub Pages.

## What changed from the old site

- **Stack:** Jekyll (Ruby) → Eleventy (Node). No `bundle`, no native gems — just `npm install` and `npm run serve`.
- **Design:** New layout and typography (DM Sans + Fraunces), responsive sidebar, and a simple color palette.
- **Content:** Same info (name, tagline, social links, About / My Work / de Bivort Lab). The About and Project pages are placeholders — replace the text in `about.njk` and `project.njk` with your own.

Old Jekyll files (`_config.yml`, `index.md`, `about.md`, `project.md`, `_posts/`) are still in the repo but are ignored by Eleventy. You can remove them once you’re happy with the new site.
