/* ==========================================================================
   Akshitha Seelam — Portfolio
   script.js
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Theme toggle (dark / light) — persisted in localStorage
   -------------------------------------------------------------------------- */
(function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");

  applyTheme(initial);

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  function applyTheme(mode) {
    root.setAttribute("data-theme", mode);
    toggle.setAttribute("aria-pressed", String(mode === "dark"));
    toggle.setAttribute("aria-label", mode === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
})();

/* --------------------------------------------------------------------------
   2. Mobile hamburger menu
   -------------------------------------------------------------------------- */
(function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navLinks.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Open menu");
    });
  });
})();

/* --------------------------------------------------------------------------
   3. Projects — data-driven so new projects can be added without touching
   the HTML/CSS. Add a new object to this array to add a new card.
   -------------------------------------------------------------------------- */
const projects = [
  {
    title: "AI-Enhanced DriveLite — Intelligent Vehicle Rental Management System",
    status: "Completed",
    image: "assets/project1.png",
    description:
      "A full-stack vehicle rental platform with JWT-based authentication, vehicle browsing and booking management, and an AI microservice that recommends vehicles from user preferences.",
    technologies: [
      "Spring Boot",
      "React.js",
      "Vite",
      "MySQL",
      "Spring Security",
      "JWT",
      "REST APIs",
      "Python",
      "Flask",
      "Scikit-learn",
    ],
    features: [
      "JWT-based authentication with secure API access for registration and login",
      "Vehicle browsing, search/filter, booking, booking history, and cancellation",
      "AI recommendation microservice (Flask + Random Forest) that scores vehicles against budget, type, duration, and purpose and returns a top pick with alternatives",
    ],
    github: "https://github.com/Akshitha2111/drivelite",
    demo: "",
  },

  /*
    To add another project, copy the block below into this array:

    {
      title: "Project Name",
      status: "Completed" | "In Progress",
      image: "assets/project2.png",
      description: "One or two sentence summary.",
      technologies: ["Tech1", "Tech2"],
      features: ["Feature one", "Feature two"],
      github: "https://github.com/YOUR-USERNAME/project-repo",
      demo: "https://your-live-demo-url.com", // omit or leave "" if none
    },
  */
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map((project) => {
      const techBadges = project.technologies
        .map((t) => `<span class="badge">${escapeHtml(t)}</span>`)
        .join("");

      const featureItems = project.features
        .map((f) => `<li>${escapeHtml(f)}</li>`)
        .join("");

      const demoButton = project.demo
        ? `<a href="${escapeAttr(project.demo)}" class="btn btn--outline btn--sm" target="_blank" rel="noopener">Live Demo</a>`
        : "";

      const githubButton = project.github
        ? `<a href="${escapeAttr(project.github)}" class="btn btn--primary btn--sm" target="_blank" rel="noopener">GitHub</a>`
        : "";

      return `
        <article class="project-card reveal">
          <div class="project-card__image">
            <img src="${escapeAttr(project.image)}" alt="${escapeAttr(project.title)} preview"
                 onerror="this.parentElement.textContent='Add ${escapeAttr(project.image)}'" />
          </div>
          <div class="project-card__body">
            <div class="project-card__top">
              <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
              <span class="status-pill">${escapeHtml(project.status)}</span>
            </div>
            <p class="project-card__desc">${escapeHtml(project.description)}</p>
            <div class="project-card__tech badges">${techBadges}</div>
            <ul class="project-card__features">${featureItems}</ul>
            <div class="project-card__actions">${githubButton}${demoButton}</div>
          </div>
        </article>
      `;
    })
    .join("");

  observeReveal();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

/* --------------------------------------------------------------------------
   4. Scroll reveal — one subtle entrance per element, no repeated motion
   -------------------------------------------------------------------------- */
function observeReveal() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. Init
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  document.querySelectorAll(".stat-card, .about__text, .section__title").forEach((el) => el.classList.add("reveal"));
  observeReveal();
});
