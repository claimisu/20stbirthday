# Birthday Night — invitation site

No build step. Open `index.html` in a browser (or run `python3 -m http.server` in this folder and visit localhost:8000).

## Edit
- **All text, date, time, venue, address, colours, motion:** `js/siteConfig.js` (one file, commented).
- **Photos:** `images/`. Replace a file with the same name, or change the path in `siteConfig.js` (`images` and `gallery`). Gallery order = order of the list.
- **Date/time:** `event.dateISO` ("2026-10-16") and `event.startTime` ("20:00"). The calendar button works as soon as both are set.
- **Maps button:** paste a share link into `event.mapsUrl`, or just fill venue + address.
- **Turn sections off:** `sections: { gallery: false }`.
- **Calmer/stronger motion:** `motion.intensity` (0.5–1.5) or `motion.enabled: false`.

## Tickets / registration (Google Form)
`rsvp.formUrl` in `siteConfig.js` holds the Google Form link. When it is set, the "Get your ticket" button (in the RSVP section and on the pass) opens the form, and the built-in RSVP form is hidden. Clear `formUrl` to go back to the options below.

## RSVP (honest options)
1. Nothing set: works visually, tells the guest it is preview mode (nothing saved).
2. `rsvp.email`: opens the guest's mail app with the answer pre-filled.
3. `rsvp.endpoint`: real saving. Easiest = Google Form: create a form with 3 short-answer questions, open "Get pre-filled link" to read the `entry.XXXX` ids, put them in `fieldNames`, and use the form's `.../formResponse` URL as `endpoint` (keep `noCors: true`). Formspree/Basin/Getform URLs also work (set `noCors: false`).

## Publish on GitHub Pages
1. Create a new repository on GitHub (e.g. `birthday-invitation`) and upload everything from this folder so that `index.html` is in the **root** of the repo.
2. Open **Settings → Pages**. Under **Build and deployment** choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

Notes:
- All paths are relative, so the site works both from a repo subfolder URL and from a custom domain.
- File names are case-sensitive on GitHub (`images/Crowd.jpg` ≠ `images/crowd.jpg`).
- The repo is public on a free account, so everything in `siteConfig.js` (name, venue, address) is public. Don't put a private home address in it if the repo is public.
- Other hosts also work: Netlify Drop, Vercel, Cloudflare Pages.

## Better photos
The pool image was low-resolution, so crops are soft. Drop in full-size originals (JPG, ~2000px wide, under 400 KB each) with the same file names for a sharper result.

## Extra animations (v2)
All can be switched off one by one in `siteConfig.js` → `motion.effects`:
spotlight (lamp light follows the pointer), ballProgress (8-ball rolls along the bottom as you scroll), rackBreak (playable pool break — tap the table to shoot), scramble (date/venue decode), tickerVelocity (ticker reacts to scroll speed/direction), cardTilt, heroParallax, confetti (on "I'm in"). Hero/section titles also enter letter by letter.

## Countdown + VIP pass
Section near the end (countdown to `event.dateISO` + `event.startTime`, plus a ticket). Texts live in `siteConfig.js` → `ticket`. Turn off with `sections.ticket: false`. The square code on the ticket is decorative, not a real QR.

## Fonts
Headings: Archivo (condensed, heavy sans) via `--display` at the top of `css/style.css`; body: Jost; red pass page: Anton. To change one, edit the Google Fonts link in `index.html` and the `--display` / `--sans` variables. The handwritten "Let's play" uses `--script`.
