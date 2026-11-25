# CleanProof

The public landing site for **CleanProof**, an independent monthly reporting service for commercial cleaning companies.

CleanProof turns existing cleaning records, inspection results, service requests and selected photographs into polished monthly PDF reports prepared under the cleaning company's branding.

## Stack

- React 19
- TypeScript
- Vite 8
- Plain CSS, with the Manrope variable font bundled locally
- No backend, database, analytics or paid APIs

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Contact email

The public contact address lives in one place:

```ts
// src/config/site.ts
export const CONTACT_EMAIL = 'cleanproof.reports@gmail.com'
```

Update that constant to change every email link on the site. The address also appears in the static metadata and structured data in `index.html`, so update those references at the same time.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel will detect Vite. Use:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

No environment variables are required. `vercel.json` adds long-term caching for hashed assets and baseline security headers.

Once the production domain is known, add an absolute `og:url` and canonical URL to `index.html`, and add a `sitemap.xml` if the site will be submitted to search consoles.

## Content rules

- CleanProof is an independent, early-stage service based in India.
- The report in the Sample Report section uses wholly fictional names and data. It must remain clearly labelled as illustrative.
- Do not add testimonials, customer logos, certifications, performance claims or contact details that are not real.
- CleanProof formats records supplied by the customer. It does not clean, manage cleaning operations, perform independent inspections or certify service quality.
- All photos and report previews on the page are built with HTML/CSS. No stock imagery is used.

## Project structure

```text
public/                 favicon, app icons, social image, robots.txt
src/components/         reusable UI and report-preview components
src/config/site.ts      business details and contact configuration
src/App.tsx             page sections and content
src/styles.css          full responsive design system
```
