# Epoxy Shire — Marketing Website Demo

Premium single-page marketing website for Epoxy Shire, a Bedfordshire resin floor coating business.

Built with Vite 5, React 18, TypeScript (strict), Tailwind CSS 3, and Lucide React.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for production

```bash
npm run build   # outputs to /dist
npm run preview # preview the production build locally
```

## Deploy to Netlify

**Option A — Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Option B — Netlify dashboard**
1. Push the repo to GitHub
2. Connect the repo in [app.netlify.com](https://app.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## Before going live — replace everything below

### Critical (site will not work properly without these)

| Item | Where to change |
|---|---|
| Logo image | Drop `epoxy-shire-logo.jpg` into `/public/` |
| Phone number | Search `0XXXX XXXXXX` across all files |
| Email address | Search `info@epoxyshire.co.uk` across all files |
| WhatsApp number | `src/components/Contact.tsx` — update `wa.me/447000000000` |
| Contact form backend | `src/components/Contact.tsx` — replace the `mailto:` fallback with Netlify Forms, Formspree or similar |

### High priority (affects trust and accuracy)

| Item | Where |
|---|---|
| Qualified status | `src/components/Hero.tsx` — update the "Fully trained and certified" trust signal once your course is complete. Remove the `[PLACEHOLDER]` note. |
| Real customer reviews | `src/components/Testimonials.tsx` — replace all three placeholder quotes with real customer reviews |
| Real project photos | `src/components/Gallery.tsx` — replace placeholder cells with real before/after project photos |
| Guarantee terms | `src/components/WhyUs.tsx` — insert your actual guarantee wording |
| Finish photos | `src/components/Finishes.tsx` — add a real photo for each finish type |
| Hero photo | `src/components/Hero.tsx` — replace the gradient placeholder with a full-bleed epoxy floor photo |
| Certification/trade badge | `src/components/Footer.tsx` — add your accreditation logo once you have it |

### Recommended before launch

- [ ] Add a Google Maps embed to the Service Area section (`src/components/ServiceArea.tsx`)
- [ ] Set up Google Analytics, Plausible or similar analytics
- [ ] Generate a real favicon from the logo (replace `public/favicon.svg`)
- [ ] Register and add the business to Google Business Profile
- [ ] Update meta description in `index.html` with final copy
- [ ] Update service area towns if your coverage changes

---

## Project structure

```
src/
  components/
    Header.tsx        — sticky nav with mobile burger menu
    Hero.tsx          — full-viewport hero + trust strip
    Services.tsx      — 6 service cards
    Finishes.tsx      — 5 finish types with image placeholders
    Gallery.tsx       — before/after project photo grid
    Process.tsx       — 6-step installation process
    WhyUs.tsx         — features + brand story
    Testimonials.tsx  — 3 customer review cards
    ServiceArea.tsx   — coverage map + town list
    Contact.tsx       — quote form + contact details + FAQ
    Footer.tsx        — logo, links, contact, copyright
  App.tsx             — root component
  main.tsx            — entry point
  index.css           — Tailwind + global styles
public/
  favicon.svg         — placeholder ES monogram favicon
  epoxy-shire-logo.png — ADD THIS FILE
```

## Adding a form backend

The contact form currently opens the user's email client as a demo fallback. For a real deployment, replace the `handleSubmit` function in `src/components/Contact.tsx` with one of:

**Netlify Forms** (free, zero config for Netlify deploys)
- Add `data-netlify="true"` to the `<form>` element
- Remove the `onSubmit` handler
- Netlify detects the attribute at build time

**Formspree**
- Sign up at formspree.io, create a form, get an endpoint URL
- Use `fetch()` to POST form data to the endpoint in `handleSubmit`

**EmailJS**
- Sends email directly from the browser without a server
- Good for simple setups; has a free tier
