# Agentic Greeting

A lightweight, static web experience that personalizes a friendly greeting and shows a live clock. No build tooling is required—deploy as-is to any static hosting provider (including Vercel).

## Local preview

Open `index.html` directly in your browser or serve the directory with any static file server, for example:

```bash
npx serve .
```

## Files

- `index.html` – markup for the greeting interface.
- `styles.css` – glassmorphism-inspired styling with responsive tweaks.
- `script.js` – client-side logic for personalized messages and the live time display.

## Deployment

The project targets static hosting. To deploy on Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-60788497
```

After deployment, verify:

```bash
curl https://agentic-60788497.vercel.app
```
