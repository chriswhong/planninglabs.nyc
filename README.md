# NYC Planning Labs Website — Archive

> **This is an archived repository.** NYC Planning Labs was a civic technology team at the NYC Department of City Planning that built open-source web tools for urban planners. The team no longer exists. This repo is a fork of the [original open-source codebase](https://github.com/NYCPlanning/labs-home), updated to use static data in place of the original Netlify functions and Airtable backend, and published on GitHub Pages for posterity. It is **not affiliated with or maintained by New York City government**.

---

Original site: [planninglabs.nyc](https://planninglabs.nyc/) — built with [Gatsby.js](https://www.gatsbyjs.org/)

## Changes from the original

- Project data is served from [`static/projects.json`](static/projects.json) instead of a Netlify serverless function backed by Airtable
- Blog post data is served from a static JSON file instead of a Medium RSS feed
- Project thumbnail images are stored locally in [`static/img/projects/`](static/img/projects/)
- Deployed via GitHub Actions to GitHub Pages instead of Netlify

## Local development

Requires Node.js **v14** (see `.nvmrc`). If you use nvm:

```sh
nvm install
nvm use
```

1. Install dependencies
   ```sh
   npm install
   ```

2. Start the development server
   ```sh
   npm run develop
   ```

3. Open `http://localhost:8000` in your browser.

## Deployment

Pushes to the `develop` branch automatically deploy to GitHub Pages via the [workflow](.github/workflows/deploy.yml).

**Note:** If publishing to a GitHub project page (e.g. `username.github.io/repo-name` rather than a root domain), you must set a `pathPrefix` in [`gatsby-config.js`](gatsby-config.js):

```js
module.exports = {
  pathPrefix: '/your-repo-name',
  // ...
}
```

And build with:

```sh
gatsby build --prefix-paths
```

The GitHub Actions workflow builds without a prefix by default, so update it accordingly if needed.

## Requirements

* **[Git](https://git-scm.com/)**
* **[Node.js v14](https://nodejs.org/)**
* **[gatsby-cli](https://www.npmjs.com/package/gatsby-cli)**
