import { useEffect, useId, useMemo, useRef, useState } from "react";
import { copy } from "./content.js";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const LANG_KEY = "qs-lang";
const SECTION_IDS = ["about", "research", "projects", "pubs", "contact"];

function readInitialLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return "zh";
}

export function App() {
  const [lang, setLang] = useState(readInitialLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openProject, setOpenProject] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const menuBtnRef = useRef(null);
  const menuPanelRef = useRef(null);
  const menuId = useId();
  const t = useMemo(() => copy[lang], [lang]);
  const contactItems = useMemo(() => t.getContact(), [t]);
  const pageStyle = { "--page-bg-image": `url(${asset("paper-wash.jpg")})` };

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.title = t.docTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.docDescription);
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, t]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.08, 0.25, 0.5, 0.75],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = menuPanelRef.current;
    const focusables = panel
      ? Array.from(panel.querySelectorAll("a, button")).filter((el) => !el.hasAttribute("disabled"))
      : [];
    focusables[0]?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMenuOpen(false);
        menuBtnRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "research", label: t.nav.research },
    { id: "projects", label: t.nav.projects },
    { id: "pubs", label: t.nav.pubs },
    { id: "contact", label: t.nav.contact },
  ];

  const go = (id) => {
    setMenuOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleLang = () => setLang((v) => (v === "zh" ? "en" : "zh"));

  return (
    <div className="page" id="top" style={pageStyle}>
      <a className="skip-link" href="#main">
        {lang === "zh" ? "跳到主要内容" : "Skip to content"}
      </a>

      <header className={`top${scrolled ? " scrolled" : ""}`}>
        <nav className="nav" aria-label={lang === "zh" ? "主导航" : "Primary"}>
          <a
            className="brand"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              go("top");
            }}
          >
            {t.brand}
          </a>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : undefined}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button type="button" className="lang" onClick={toggleLang} aria-label={t.langAria}>
              {t.langSwitch}
            </button>
            <button
              ref={menuBtnRef}
              type="button"
              className="menu-btn"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? t.menuCloseAria : t.menuOpenAria}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </nav>
        <div
          ref={menuPanelRef}
          className={`mobile-menu${menuOpen ? " open" : ""}`}
          id={menuId}
          hidden={!menuOpen}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : undefined}
              onClick={(e) => {
                e.preventDefault();
                go(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-label="Hero">
          <div className="hero-copy">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>{t.name}</h1>
            <p className="subtitle">{t.subtitle}</p>
            <div className="cta-row">
              <button type="button" className="btn btn-primary" onClick={() => go("projects")}>
                {t.ctaProjects}
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => go("contact")}>
                {t.ctaContact}
              </button>
            </div>
          </div>
          <figure className="portrait">
            <img
              src={asset("portrait.jpg")}
              alt={t.portraitAlt}
              width="480"
              height="600"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </section>

        <section id="about" className="section about">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutP1}</p>
        </section>

        <section id="research" className="section">
          <h2>{t.researchTitle}</h2>
          <ul className="research-list">
            {t.research.map((item) => (
              <li key={item.num}>
                <div className="num">{item.num}</div>
                <div>
                  <div className="item-title">{item.title}</div>
                  <div className="muted">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section">
          <h2>{t.projectsTitle}</h2>
          <div className="projects">
            {t.projects.map((project, index) => {
              const open = openProject === index;
              return (
                <details
                  key={project.title}
                  className={`project${project.ready ? "" : " pending"}`}
                  open={open}
                  onToggle={(e) => {
                    if (e.currentTarget.open) {
                      setOpenProject(index);
                    } else if (openProject === index) {
                      setOpenProject(null);
                    }
                  }}
                >
                  <summary>
                    <span className="project-title">
                      {project.title}
                      {!project.ready ? (
                        <span className="badge">{lang === "zh" ? "建设中" : "WIP"}</span>
                      ) : null}
                    </span>
                    <span className="project-year">{project.year}</span>
                  </summary>
                  <div className="project-body">
                    <p>{project.body}</p>
                    <div className="project-links">
                      {project.links.map((link) => {
                        const hasHref = Boolean(link.href);
                        if (!hasHref) {
                          return (
                            <span key={link.label} className="link-disabled" aria-disabled="true">
                              {link.label}
                            </span>
                          );
                        }

                        if (link.href.startsWith("#")) {
                          const target = link.href.slice(1) || "top";
                          return (
                            <a
                              key={link.label}
                              href={link.href}
                              onClick={(e) => {
                                e.preventDefault();
                                go(target);
                              }}
                            >
                              {link.label}
                            </a>
                          );
                        }

                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                          >
                            {link.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        <section id="pubs" className="section">
          <h2>{t.pubsTitle}</h2>
          {t.pubs?.length ? (
            <ul className="pub-list">
              {t.pubs.map((pub) => (
                <li key={`${pub.title}-${pub.year}`}>
                  <div className="item-title">{pub.title}</div>
                  <div className="muted">
                    {pub.venue}
                    {pub.year ? ` · ${pub.year}` : ""}
                  </div>
                  {pub.href ? (
                    <a className="pub-link" href={pub.href} target="_blank" rel="noopener noreferrer">
                      PDF
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty">{t.pubsEmpty}</div>
          )}
          <div className="timeline">
            {t.timeline.map((row) => (
              <div className="row" key={row.when + row.text}>
                <div className="when">{row.when}</div>
                <div>{row.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>{t.contactTitle}</h2>
          <p className="muted">{t.contactLead}</p>
          <div className="chips">
            {contactItems
              .filter((item) => item.ready)
              .map((item) => (
                <a
                  className="chip"
                  key={item.id}
                  href={item.href}
                  target={item.id === "email" ? undefined : "_blank"}
                  rel={item.id === "email" ? undefined : "noopener noreferrer"}
                >
                  {item.label}
                </a>
              ))}
          </div>
        </section>
      </main>

      <footer>
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}
