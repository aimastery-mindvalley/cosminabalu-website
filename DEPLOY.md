# Deployment Guide — cosminabalu.com

## One-time setup (30 minutes)

### 1. Create GitHub repo
1. Go to github.com → New repository
2. Name it `cosminabalu-website`, make it **Private**
3. Don't add README (you'll push existing code)

### 2. Push code to GitHub
Open Terminal, run these commands one at a time:
```bash
cd ~/Documents/cosminabalu-website
git init
git add .
git commit -m "Initial site build"
git remote add origin https://github.com/YOUR_USERNAME/cosminabalu-website.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your GitHub username.

### 3. Deploy to Vercel
1. Go to vercel.com → Sign up with GitHub
2. Click **Add New → Project**
3. Import `cosminabalu-website` from GitHub
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** — takes ~2 minutes
6. You'll get a URL like `cosminabalu-website.vercel.app` to preview

### 4. Connect your domain (cosminabalu.com)
1. In Vercel: Settings → Domains → Add `cosminabalu.com`
2. Vercel will show you DNS records to add
3. Log into your domain registrar (wherever you bought cosminabalu.com)
4. Add/update the DNS records as Vercel instructs
5. Wait 15–60 minutes for DNS propagation
6. Your site is live at cosminabalu.com

---

## Adding a new blog post

Ask Claude Code to run this in the project directory:
```
Create a new blog post file in content/blog/fr/ with title "...", date "YYYY-MM-DD", category "...", and content: "..."
```

After adding the file, redeploy:
```bash
git add content/blog/fr/your-post.md
git commit -m "Add blog post: title"
git push
```
Vercel auto-deploys on every push. Takes ~2 minutes.

---

## Project structure
```
cosminabalu-website/
├── content/blog/fr/     ← Blog posts (markdown files)
├── messages/            ← Translations (fr.json, ro.json, en.json)
├── public/              ← Static files (logo, robots.txt, llms.txt)
├── src/app/[locale]/    ← Pages
└── src/components/      ← Header, Footer
```

## JSON-LD Schema (manual step post-deploy)
To add structured data for Google/AI discoverability, add this to your Vercel project environment or
use a third-party JSON-LD injection tool. The schema data is prepared in `src/lib/schema.ts`.
A `<script type="application/ld+json">` tag needs to be injected per page — this requires a
security policy override in your environment.
