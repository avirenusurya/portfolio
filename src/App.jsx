import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowUp,
  CodeXml,
  Sun,
  Moon,
  GraduationCap,
} from "lucide-react";
import { projects } from "./content.js";
import ProjectDialog from "./ProjectDialog.jsx";
import NightShiftCorner from "./NightShiftCorner.jsx";

const socials = [
  ["GitHub", "https://github.com/avirenusurya"],
  ["LinkedIn", "https://www.linkedin.com/in/avirenusurya/"],
  ["X / Twitter", "https://x.com/5uryc"],
  ["Hugging Face", "https://huggingface.co/avirenusurya"],
];

function ExternalLink({ href, children, className = "", label }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
      <ArrowUpRight size={13} aria-hidden="true" />
    </a>
  );
}

function Header({ theme, setTheme }) {
  return (
    <header className="site-header">
      <a className="home-mark" href="#top" aria-label="Surya, back to top">
        sa.
      </a>
      <nav aria-label="Main navigation">
        <a href="#top">Home</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        className="theme-toggle"
        type="button"
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        title={theme === "dark" ? "Light mode" : "Dark mode"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </header>
  );
}

function Profile() {
  return (
    <section className="profile" id="top" aria-labelledby="profile-name">
      <div className="profile-heading">
        <img
          className="avatar"
          src="/avatar.jpg"
          width="72"
          height="72"
          alt="Surya’s GitHub avatar"
        />
        <div>
          <h1 id="profile-name">Surya Avirenu</h1>
          <p>AI engineer</p>
        </div>
      </div>
      <div className="profile-intro">
        <p>I build AI products from the model to the interface.</p>
        <p>
          Studying data science at IIT Madras. Interested in LLMs, applied
          machine learning, and making the results useful to people.
        </p>
      </div>
      <div className="social-links" aria-label="Social profiles">
        {socials.map(([label, href]) => (
          <ExternalLink href={href} key={label}>
            {label}
          </ExternalLink>
        ))}
      </div>
      <p className="availability">
        <span aria-hidden="true" />
        Open to AI engineer roles
      </p>
    </section>
  );
}

function Work({ onOpen }) {
  return (
    <section
      className="work-section section"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-title">
        <h2 id="work-title">
          Selected projects <span>({projects.length})</span>
        </h2>
        <span className="preview-hint">Hover to preview</span>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.id}>
            <div className="project-row-copy">
              <h3>
                <button
                  type="button"
                  className="project-name"
                  onClick={() => onOpen(project.id)}
                  aria-label={"Explore " + project.name}
                >
                  {project.name}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </button>
              </h3>
              <p>{project.short}</p>
              <span className="project-row-category">{project.category}</span>
            </div>
            <div className="project-row-links">
              <ExternalLink
                href={project.source}
                label={project.name + " source code"}
              >
                Code
              </ExternalLink>
              {project.live && (
                <ExternalLink
                  href={project.live}
                  label={"Open " + project.name + " live project"}
                >
                  Live
                </ExternalLink>
              )}
            </div>
            <div className="project-hover" aria-hidden="true">
              <img
                src={project.image}
                alt=""
                width={project.imageWidth}
                height={project.imageHeight}
                decoding="async"
              />
              <span>{project.name}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      className="about-section section"
      id="about"
      aria-labelledby="about-title"
    >
      <h2 id="about-title">About</h2>
      <p>
        I like working across the whole product: training or adapting a model,
        building the API around it, and making an interface that helps someone
        understand the result.
      </p>
      <p>
        My recent projects cover retrieval with citations, explainable threat
        detection, multilingual voice classification, and image search with
        verifiable evidence.
      </p>
      <div className="education">
        <span className="education-icon">
          <GraduationCap size={20} aria-hidden="true" />
        </span>
        <div>
          <h3>IIT Madras</h3>
          <p>Data science student</p>
        </div>
      </div>
      <div className="stack-section">
        <h3>Working with</h3>
        <div className="stack-list">
          {[
            "Python",
            "FastAPI",
            "PyTorch",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Supabase",
            "Git",
          ].map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title">Get in touch</h2>
      <p>
        I’m open to AI engineering roles and interesting projects.
        <br className="desktop-break" /> The best way to reach me is on{" "}
        <a
          className="inline-link"
          href="https://www.linkedin.com/in/avirenusurya/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          className="inline-link"
          href="https://x.com/5uryc"
          target="_blank"
          rel="noreferrer"
        >
          X
        </a>
        .
      </p>
      <div className="social-links">
        {socials.map(([label, href]) => (
          <ExternalLink href={href} key={label}>
            {label}
          </ExternalLink>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Surya Avirenu</span>
        <a
          href="https://github.com/avirenusurya/portfolio"
          target="_blank"
          rel="noreferrer"
          aria-label="Portfolio source code"
        >
          <CodeXml size={17} aria-hidden="true" />
        </a>
        <a href="#top" aria-label="Back to top">
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );
  const [selected, setSelected] = useState(() =>
    window.location.hash.startsWith("#project/")
      ? window.location.hash.slice(9)
      : null,
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0a0a0a" : "#fafafa");
    try {
      window.localStorage.setItem("surya-portfolio-theme", theme);
    } catch {
      /* The theme still works when storage is unavailable. */
    }
  }, [theme]);
  useEffect(() => {
    const update = () =>
      setSelected(
        window.location.hash.startsWith("#project/")
          ? window.location.hash.slice(9)
          : null,
      );
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);
  function openProject(id) {
    window.history.pushState({ portfolioProject: true }, "", "#project/" + id);
    setSelected(id);
  }
  function closeProject() {
    if (window.history.state?.portfolioProject) window.history.back();
    else {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
      setSelected(null);
    }
  }
  const project = projects.find((project) => project.id === selected);
  return (
    <div className="portfolio">
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <div className="page-frame">
        <Header theme={theme} setTheme={setTheme} />
        <main>
          <Profile />
          <Work onOpen={openProject} />
          <About />
        </main>
        <Footer />
      </div>
      <NightShiftCorner obscured={Boolean(project)} />
      <ProjectDialog project={project} onClose={closeProject} />
    </div>
  );
}
