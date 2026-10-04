# pixel.log

A tiny retro microblog. Every post is a plain text file (with an optional photo) that you own.
Your phone and computer both post to the same place, so they're always in sync.

- Chronological feed, text and/or photo posts
- Live search
- Mobile friendly, pixel/terminal look
- RSS feed
- Free to host

---

## How the pieces fit together

1. **GitHub** stores your posts (the folder of files). This is your archive.
2. **Cloudflare Pages** (or Netlify) turns those files into a website and republishes automatically.
3. **Pages CMS** is a web editor. You sign in with GitHub, write a post or upload a photo from any device, and it saves a file into your GitHub repo. The site updates about a minute later.

---

## Setup (about 20 minutes, one time)

### 1. Put the project on GitHub
1. Make a free account at github.com.
2. Click the **+** in the top right, then **New repository**. Name it `pixel-log`. Leave it **Public**. Click **Create repository**.
3. On the new empty repo page, click **uploading an existing file**.
4. Unzip this project on your computer, then drag **everything inside the `pixel-log` folder** into the upload box. Make sure the hidden files `.pages.yml`, `.eleventy.js` and `.gitignore` go too (on a Mac press `Cmd+Shift+.` in Finder to show hidden files).
5. Click **Commit changes**.

### 2. Publish the website
1. Make a free account at cloudflare.com, then go to **Workers & Pages**, **Create**, **Pages**, **Connect to Git**.
2. Pick your `pixel-log` repo.
3. Use these build settings:
   - Build command: `npm run build`
   - Build output directory: `_site`
4. Click **Save and Deploy**. After a minute or two you'll get a link like `pixel-log.pages.dev`. That's your site.

(Netlify works the same way with the same two settings.)

### 3. Set up posting from your phone and computer
1. Go to **pagescms.org** and sign in with GitHub.
2. Choose your `pixel-log` repo. It reads the `.pages.yml` file and gives you a **Posts** form.
3. Click **Add an entry**, write something, optionally attach a photo, save. Check your site a minute later.
4. On your phone, open the same Pages CMS page in your browser, then use **Share > Add to Home Screen** so it opens like an app.

---

## Making it yours

| Want to change | Edit this file |
| --- | --- |
| Site name and tagline | `src/_data/site.json` |
| Colors and fonts | top of `src/css/style.css` (the `:root` block) |
| About page | `src/about.md` |
| Page layout | `src/_includes/base.njk` and `src/index.njk` |
| Time zone shown on posts | `.eleventy.js` (search for `America/New_York`) |

After you get a custom domain or your real `pages.dev` address, put it in `site.json` as `url` so the RSS feed links are correct.

## Posting by hand (no editor)

Add a file to `src/posts/` named like `2026-10-05-my-thought.md`:

```
---
date: 2026-10-05T09:30:00-04:00
title: Optional title
image: /images/my-photo.jpg
alt: Optional description of the photo
---
Your text goes here.
```

Put the photo in `src/images/`.

## Tips

- **Resize big photos** before uploading (around 1600px wide is plenty) to keep the repo light. Phone photos can be several MB each.
- **Back up** by clicking **Code > Download ZIP** on your GitHub repo. That zip is your entire archive.
- **Test locally** (optional): install Node.js, run `npm install`, then `npm start` and open http://localhost:8080.
- Everything you post is public. Keep private stuff elsewhere.
