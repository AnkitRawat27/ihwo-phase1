# IHWO Phase 1 — Static Website

A responsive, beginner-friendly static website for the IHWO founding initiative.

## Files
- `index.html` — Home
- `about.html` — About IHWO
- `mission.html` — Mission
- `victim-rights.html` — General victim-rights information
- `find-help.html` — External support resources
- `partner-network.html` — Partner principles and verification
- `transparency.html` — Transparency commitments
- `contact.html` — Contact guidance
- `assets/style.css` — Responsive design
- `assets/site.js` — Shared navigation and footer

## Run locally
Open `index.html` in a browser. For best results, use VS Code with the Live Server extension, or run a simple local static server.

## Deploy with GitHub + Cloudflare Pages
1. Create a GitHub account and a new **public** repository named `ihwo-phase1`.
2. Upload the contents of this folder to the repository root. Do not upload only the ZIP file.
3. In Cloudflare, open Workers & Pages → Create application → Pages → Connect to Git.
4. Authorise GitHub and select `ihwo-phase1`.
5. Framework preset: `None`; Build command: leave blank; Build output directory: `/` (or `.` if the interface requires it).
6. Deploy. Cloudflare will provide a `*.pages.dev` address.
7. Test every page on mobile and desktop.

## Before public launch
- Replace or remove any contact placeholders. Do not invent an email address.
- Review all text with a qualified lawyer for the countries in which IHWO intends to operate.
- Confirm name/trademark availability and the organisation's legal status.
- Do not claim registration, official status, partnerships, offices, audited impact or services that do not exist.
- Do not add a public victim case upload form until secure storage, access controls, consent, retention/deletion rules, safeguarding and human case review are ready.
- Do not collect donations until legal authority, banking and applicable fundraising compliance are confirmed.
- Verify external links regularly. Links are informational and are not IHWO partners or endorsements.
- This is a static information website, not a secure case-management system or AI chatbot.

## Privacy and safety
This version intentionally has no form, database, analytics, chatbot, file upload or tracking script. Do not add these casually. A future case portal requires a privacy impact assessment, security review and a defined human response process.
