# CoachSync Website

Static marketing site for [coachsync.rgsoft.org](https://coachsync.rgsoft.org).
Lives in this folder inside the CoachSync repo and deploys to a separate
GitHub Pages repository.

## Pages

| File | URL |
|------|-----|
| `index.html` | https://coachsync.rgsoft.org |
| `privacy.html` | https://coachsync.rgsoft.org/privacy.html |
| `terms.html` | https://coachsync.rgsoft.org/terms.html |
| `support.html` | https://coachsync.rgsoft.org/support.html |

Use these URLs in App Store Connect and Google Play Console.

## Edit locally

1. Change HTML, CSS, or assets under `website/`.
2. Update store links in `js/config.js` when apps go live:

```js
appStoreUrl: 'https://apps.apple.com/app/idXXXXXXXXX',
playStoreUrl: 'https://play.google.com/store/apps/details?id=org.rgsoft.coachsync',
```

3. Preview:

```bash
# From the CoachSync project root:
npx serve website

# If you are already inside website/:
npx serve .
```

Then open http://localhost:3000 — or open `index.html` directly in a browser.

## Deploy to GitHub Pages

The site deploys automatically when you push changes under `website/` to
`main` on the CoachSync repo.

### One-time setup

#### 1. Create the Pages repository

Create a new **public** GitHub repo:
[RobertGjoshevski/coachsync-website](https://github.com/RobertGjoshevski/coachsync-website)
with an empty `main` branch.

#### 2. Enable GitHub Pages

In the Pages repo: **Settings → Pages → Deploy from branch → `main` / root**.

#### 3. Add GitHub secrets to CoachSync repo

In the **CoachSync** repo: **Settings → Secrets and variables → Actions**.

| Secret | Value |
|--------|-------|
| `WEBSITE_DEPLOY_TOKEN` | Personal Access Token with `repo` scope (write access to [coachsync-website](https://github.com/RobertGjoshevski/coachsync-website)) |

To create a PAT: GitHub → Settings → Developer settings → Personal access
tokens → Generate new token → enable `repo` (classic) or grant Contents write
on the Pages repo (fine-grained).

#### 4. Configure custom domain

The `CNAME` file in this folder contains `coachsync.rgsoft.org` and is deployed
with the site.

In the Pages repo: **Settings → Pages → Custom domain** → enter
`coachsync.rgsoft.org` → Save → Enable **Enforce HTTPS**.

#### 5. DNS (rgsoft.org)

At your DNS provider, add:

| Type | Name | Value |
|------|------|-------|
| CNAME | `coachsync` | `<username>.github.io` |

GitHub may also show the exact target in the Pages repo settings after you
add the custom domain.

DNS can take up to 24–48 hours to propagate.

### Day-to-day workflow

```bash
# Edit files under website/
git add website
git commit -m "Update website copy"
git push origin main
# GitHub Action deploys to coachsync-website in ~1–2 minutes
```

Manual deploy: **Actions → Deploy Website to GitHub Pages → Run workflow**.

## Structure

```
website/
  index.html          Landing page
  privacy.html        Privacy Policy
  terms.html          Terms of Use
  support.html        Support & account deletion
  css/styles.css      Styles (orange brand)
  js/config.js        Store URLs, contact email
  js/main.js          Nav, store buttons
  assets/             Logo images
  CNAME               Custom domain for GitHub Pages
```

## Store publishing

See [docs/STORE_PUBLISHING_CHECKLIST.md](../docs/STORE_PUBLISHING_CHECKLIST.md)
for App Store and Play Store requirements, assets, and remaining gaps.

## Brand

- Primary orange: `#FF7A1A`
- CTA green: `#22C55E`
- Background: `#0D0D0F`
- Font: Space Grotesk (Google Fonts)

Matches the live app design system in `lib/Globals/design_system.dart`.

## Legal note

Privacy Policy and Terms drafts are provided for store compliance. Have them
reviewed by legal counsel before submission.
