# Akshitha Seelam — Portfolio


**Live site:** https://akshitha-portfolio-teal.vercel.app/

## Sections

About · Skills · Education · Projects · Achievements · Resume 

## Project structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── profile.jpg          ← profile photo
│   ├── project1.png         ← DriveLite screenshot
│   └── Akshitha_Resume.pdf  ← resume (download / view buttons)
└── README.md
```

File names are case-sensitive on Vercel and GitHub Pages, so keep them exactly
as shown.

## Run it locally (VS Code)

1. Open the `portfolio` folder in VS Code: `File → Open Folder…`.
2. Install the **Live Server** extension (by Ritwick Dey) if you don't have it.
3. Right-click `index.html` and choose **Open with Live Server**. It opens at
   `http://127.0.0.1:5500`.
   - You can also double-click `index.html` to open it directly in a browser.
4. Edit any file and save — Live Server refreshes the page automatically.

## Save changes to GitHub

```bash
git add .
git commit -m "Describe your change"
git push
```

First time only (no repo yet):

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Akshitha2111/YOUR-REPO.git
git push -u origin main
```

If you use a `.gitignore`, keep large unrelated folders (such as a JDK) out of
the repo.

## Deploy

### Vercel (current setup)

1. Push the project to a GitHub repo.
2. On [vercel.com](https://vercel.com): **Add New → Project** and import the repo.
3. Framework preset: **Other** (static site). No build command needed.
4. Deploy. After that, **every `git push` to `main` redeploys automatically.**

`index.html` must be at the repo root, or set **Root Directory** to the
project folder in Vercel → Settings → General.

### GitHub Pages (alternative)

**Settings → Pages → Deploy from a branch →** `main` and `/ (root)`. The site
goes live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

## Adding a new project

Open `script.js` and find the `projects` array. Copy the commented template
block into it. A new card appears automatically, with no HTML/CSS changes:

```js
{
  title: "Project Name",
  status: "Completed", // or "In Progress"
  image: "assets/project2.png",
  description: "One or two sentence summary.",
  technologies: ["Tech1", "Tech2"],
  features: ["Feature one", "Feature two"],
  github: "https://github.com/Akshitha2111/project-repo",
  demo: "https://your-live-demo-url.com", // use "" if none
}
```

Put the screenshot in `assets/` with the same file name you used in `image`.

## Contact

The portfolio has no contact form and needs no backend. Visitors reach me
through the links in the **Let's Connect** section, the hero icons and the
footer:

- Email: seelamakshitha01@gmail.com
- GitHub: https://github.com/Akshitha2111
- LinkedIn: https://www.linkedin.com/in/seelam-akshitha-b6147b350

To change any of these, search `index.html` for the old value and replace it
everywhere (hero icons, Contact section, footer).

## Updating the resume or photo

Replace `assets/Akshitha_Resume.pdf` or `assets/profile.jpg` with the new
file **using the same name**, then commit and push.
