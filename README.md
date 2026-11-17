# GitHub Pages Organization Test

A small static site for checking GitHub Pages deployment from an organization repository.

## Files tested

- `index.html` — entry page
- `styles.css` — shared stylesheet
- `script.js` — browser-side JavaScript interaction
- `about.html` — second HTML page and relative navigation
- `assets/sample.svg` — static image asset
- `404.html` — custom not-found page
- `.nojekyll` — disables Jekyll processing for files beginning with underscores

## Deploy using a branch

1. Create a repository under your GitHub organization, for example `pages-deployment-test`.
2. Upload all files and folders in this directory to the repository root.
3. Commit them to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then click **Save**.
7. Wait for the Pages deployment to finish. Open the URL shown in Settings → Pages.

For a project repository, the URL is normally:
`https://ORGANIZATION.github.io/REPOSITORY/`

## Test checklist

- Home page loads and is styled.
- Sample SVG image appears.
- JavaScript button displays a success message.
- Second page opens and its back link works.
- `https://ORGANIZATION.github.io/REPOSITORY/a-page-that-does-not-exist` displays the custom 404 page.

GitHub Pages serves static files. It does not run Python, Node.js server code, a database, or backend API endpoints.
