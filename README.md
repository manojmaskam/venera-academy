# Venera Academy Dilsukhnagar — Website

Static marketing website (plain HTML/CSS/JS, no build step) for Venera Academy Dilsukhnagar, a beauty training institute in Hyderabad.

## Structure

```
/                     page HTML — index, about, contact, blog, blog-post, placements, and 6 course pages
                      (makeup-artist, hair-stylist, cosmetologist, beautician, nail, skin-specialist)
css/styles.css        single shared stylesheet (black & gold theme)
js/script.js          single shared script (nav, dropdowns, course cards, gallery, reveals, forms, FAQ)
assets/img/           images (optimized for web)
```

## Run locally

Any static server works, e.g.:

```bash
python -m http.server 5599
# then open http://localhost:5599/index.html
```

## Deploy

It's a static site — upload the whole folder (except `.claude/`) to any static host:

- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop the folder or connect the git repo. No build command; publish directory is the project root.
- **GitHub Pages:** push to a repo and enable Pages on the branch root.
- **Any web host / cPanel:** upload files to `public_html`.

No server, database, or build step required.

## ⚠️ Before going live — connect the forms

The **Contact form** and **newsletter form** currently only show a confirmation message on the front end
(`js/script.js`) — **submissions are not sent anywhere yet.** To actually receive enquiries, connect a
form backend (no server needed):

1. Create a free key at **https://web3forms.com** (uses your email `info@veneraacademy.in`).
2. Provide the access key, or update the submit handler in `js/script.js` to POST the form data to
   `https://api.web3forms.com/submit` with your `access_key`.

(Formspree or Getform work the same way.)

## Caching

Assets are linked without version params (`css/styles.css`, `js/script.js`) — nothing to bump when
you edit them. The host serves CSS/JS with `Cache-Control: max-age=7200`, so after a deploy a
returning visitor may see the previous file for up to two hours before it refreshes on its own.
HTML is served `max-age=0`, so page changes go live immediately.

If you ever need a change to reach everyone instantly, add a one-off `?v=<date>` to the `<link>`
and `<script>` tags on every page — and use a value never served before, since reusing an old one
makes browsers serve that old copy back.

## Notes

- Fonts: Playfair Display via Google Fonts CDN.
- Contact page embeds a Google Maps iframe.
- Favicon: `assets/img/favicon.png` (gold "V" on black).
- Theme colours are CSS custom properties at the top of `css/styles.css` (`--brand`, `--gold-grad`, ...).
