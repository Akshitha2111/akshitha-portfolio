# Akshitha Seelam — Portfolio

A responsive, recruiter-facing personal portfolio built with plain HTML, CSS
and JavaScript (no frameworks). Includes a dark/light toggle, a data-driven
projects section, and a client-side-validated contact form.

## Project structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── profile.jpg          ← replace with your photo
│   ├── project1.png         ← replace with a DriveLite screenshot
│   └── Akshitha_Resume.pdf  ← replace with your resume
└── README.md
```

## Run it locally (VS Code)

1. Open the `portfolio` folder in VS Code: `File → Open Folder…`.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions
   panel, if you don't already have it.
3. Right-click `index.html` in the file explorer and choose
   **"Open with Live Server"**. It opens at `http://127.0.0.1:5500`.
   - Without the extension, you can also just double-click `index.html` to
     open it directly in a browser, but a local server is recommended so the
     `fetch`/form behavior matches what you'll see in production.
4. Edit any file and save — Live Server refreshes the page automatically.

## Deploy

### Option A — GitHub Pages
1. Create a new GitHub repository and push this folder's contents to it:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Source → Deploy from a branch**, pick
   `main` and `/ (root)`, then save.
3. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

### Option B — Vercel
1. Push the folder to a GitHub repo (steps above).
2. Go to [vercel.com](https://vercel.com), **Add New → Project**, and import
   the repo.
3. Framework preset: **Other** (static site) — no build command needed.
4. Deploy. Vercel gives you a live URL immediately and redeploys on every
   push.

## Adding a new project later

Open `script.js` and find the `projects` array near the top. Copy the
commented template block inside it and fill in your details — a new card
appears automatically with no HTML/CSS changes needed:

```js
{
  title: "Project Name",
  status: "Completed", // or "In Progress"
  image: "assets/project2.png",
  description: "One or two sentence summary.",
  technologies: ["Tech1", "Tech2"],
  features: ["Feature one", "Feature two"],
  github: "https://github.com/YOUR-USERNAME/project-repo",
  demo: "https://your-live-demo-url.com", // omit or use "" if none
}
```

## Connecting the contact form

The form currently validates input client-side but does not send anywhere.
To make it functional, open `script.js`, find `handleContactSubmit()`, and
replace its body with a request to one of:
- **Formspree** — point a `fetch()` POST at your Formspree endpoint URL.
- **EmailJS** — call `emailjs.send()` with your service/template IDs.
- Your own backend API.

## Placeholders to replace before publishing

| Location | What to add |
|---|---|
| `assets/profile.jpg` | Your photo (falls back to a gray placeholder box until added) |
| `assets/project1.png` | A screenshot of the DriveLite project |
| `assets/Akshitha_Resume.pdf` | Your actual resume PDF |
| `index.html` — hero social icons | Real GitHub, LinkedIn, and email links (currently `YOUR-USERNAME` / `example.com`) |
| `index.html` — Contact section | Real email, LinkedIn, and GitHub links |
| `index.html` / `script.js` — footer & project links | Same GitHub/LinkedIn URLs |
| `script.js` — `projects[0].github` / `demo` | Real DriveLite repo link, and a live demo link if one exists |
| Achievements → Coding profiles | Real LeetCode / CodeChef / HackerRank profile URLs (currently `#`) |
| `script.js` — `handleContactSubmit()` | Formspree/EmailJS/backend integration |

No skill percentages, certifications, GitHub stats, or project results have
been invented — only what was provided in the brief is included.
