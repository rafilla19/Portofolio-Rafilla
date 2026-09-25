# Rafilla Portfolio

A modern React + Vite portfolio for Rafilla, focused on Information Systems and Data Science.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Project structure

- `src/App.jsx` contains the page sections, content arrays, navigation, theme toggle, reveal animations, and contact form behavior.
- `src/index.css` contains the full visual system, responsive layout, palette variables, and component styles.
- `src/main.jsx` mounts the React application.
- `index.html` contains document metadata and the root mount point.

## Editing content

Update the arrays near the top of `src/App.jsx` to change navigation, skills, certificates, projects, and experience. Replace the placeholder social URLs and email address before publishing.

The required palette is centralized in CSS variables at the top of `src/index.css`:

- Dark green: `#0A3323`
- Midnight green: `#105666`
- Moss green: `#839958`
- Beige: `#F7F4D5`
- Rosy brown: `#D3968C`
