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

## Cache busting

CSS/JS are versioned (`styles.css?v=11`, `script.js?v=10`). **Bump the number** on the `<link>`/`<script>`
tags whenever you edit `styles.css` or `script.js` so browsers load the new file.

## Notes

- Fonts: Playfair Display via Google Fonts CDN.
- Contact page embeds a Google Maps iframe.
- Favicon: `assets/img/favicon.png` (gold "V" on black).
- Theme colours are CSS custom properties at the top of `css/styles.css` (`--brand`, `--gold-grad`, ...).
