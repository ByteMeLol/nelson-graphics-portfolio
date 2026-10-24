# Modern Graphic Design Portfolio

A responsive React + Tailwind CSS portfolio inspired by your black/white/yellow reference.

## Run locally

1. Install Node.js (LTS) if you don't have it.
2. Unzip this project and open the folder in a terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite.

## Customize before publishing

Search in `src/App.jsx` to update your contact details and social links when you are ready.

## Add project images

Place your project images in `src/images/projects/`. The project cards currently use polished remote placeholders so the site works immediately. To use your own images, add the file paths to the `projects` array in `src/App.jsx` and replace the Unsplash URL in the project card with the local path (for example, `/src/images/projects/baobab-hospital.jpg`).

The project images and fonts currently load from external services, so an internet connection is needed for those assets.

## Deploy

You can deploy the project to Vercel or Netlify. Build command: `npm run build`; output directory: `dist`.

Note: This is a front-end starter. Contact uses an email link, not a backend form.
