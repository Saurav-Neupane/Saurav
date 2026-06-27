# Saurav Neupane — Portfolio

A React + Vite + Tailwind CSS v4 portfolio site.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Edit your content

You almost never need to touch component code. All text, links, and project
data live in **`src/data.js`**:

- `profile` — name, titles, bio, email, WhatsApp number, social links, photo
- `stats` — the four numbers in the hero stats row
- `tickerItems` — the scrolling tag strip below the hero
- `skillGroups` — the three skill columns under About
- `services` — the six service cards (click any → scrolls to Contact)
- `achievements` — the four animated counter cards
- `projects` — your project cards, shown only on the `/projects` page

### Adding your social links

In `src/data.js`, find `profile.social` and paste your URLs in. Any platform
left as an empty string `""` shows as greyed-out/inactive instead of a dead
link:

```js
social: {
  github: "https://github.com/yourusername",
  instagram: "https://instagram.com/yourusername",
  ...
}
```

### WhatsApp number

`profile.whatsapp` must be the full international number with country code,
no `+`, no spaces, no leading zero — e.g. `9779747367644` for a Nepali
number. `profile.whatsappDisplay` is just the human-readable version shown
on the page; it doesn't affect the link.

### Swapping your photo

Drop a new image into `public/` and update `profile.photo` in `src/data.js`
to match the filename. Keep it under ~300KB for fast load — if it's a phone
photo straight out of the camera, compress it first (TinyPNG, Squoosh, or
ask Claude to do it for you).

### Adding more projects

Copy the object shape already used for Rentro Nepal inside the `projects`
array in `src/data.js` and fill in your own values. They'll automatically
show up on the `/projects` page.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel auto-detects Vite and sets the right build
command (`npm run build`) and output directory (`dist`).

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Leave build settings as default (Vercel detects Vite automatically).
4. Deploy.

`vercel.json` is already set up with SPA rewrites so client-side routing
(the `/projects` page) works correctly on production, not just locally.

## Project structure

```
src/
  App.jsx                    — routing (Home + Projects page) & scroll handling
  data.js                    — ALL editable content
  index.css                  — Tailwind import + design tokens (colors, fonts)
  Icons.jsx                  — inline SVG icon set (no external icon library)
  components/
    NavBar.jsx                — nav with mobile menu, cross-route hash links
    Hero.jsx                  — animated hero with floating badges
    About.jsx                 — about + skills grid
    Services.jsx              — clickable service cards → scroll to contact
    Achievements.jsx          — animated count-up stat cards
    Contact.jsx                — email, WhatsApp, social links
    Footer.jsx
    ProjectsPage.jsx           — dedicated /projects route
    ui.jsx                     — shared Reveal animation + SectionHeading
```

## Notes on what's still a placeholder

- **Rentro Nepal description** — marked with `// EDIT ME` in `data.js`.
  Write your own description; I deliberately didn't fabricate product
  details I wasn't given.
- **Social links** — all empty until you fill them in.
- **Project screenshot** — shows a placeholder box until you add a real
  image path.

