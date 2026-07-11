import { useEffect, useMemo, useState } from "react";

const copy = {
  zh: {
    brand: "王保会",
    nav: {
      about: "关于",
      research: "方向",
      projects: "项目",
      pubs: "成果",
      contact: "联系",
    },
    menu: "菜单",
    close: "关闭",
    langSwitch: "EN",
    eyebrow: "人工智能 · 研 0 · 大连民族大学",
    name: "你好，我是王保会",
    subtitle:
      "关注可靠、可解释与可部署的智能系统。这里记录我的研究方向、项目与申博材料。",
    ctaProjects: "查看项目",
    ctaContact: "取得联系",
    portraitAlt: "学术头像",
    aboutTitle: "关于我",
    aboutP1:
      "我是大连民族大学 2026 级人工智能研究生（研 0），导师王鹏杰。当前正在建立长期研究主线，并对大模型可靠性、多模态理解与 AI 系统落地保持持续关注。",
    researchTitle: "研究方向",
    research: [
      {
        num: "01",
        title: "可靠大模型系统",
        desc: "幻觉抑制、工具调用、评测协议与失败案例分析。",
      },
      {
        num: "02",
        title: "多模态理解与生成",
        desc: "图像—文本对齐、结构化感知，以及面向科研工作流的交互。",
      },
      {
        num: "03",
        title: "可部署 AI 应用",
        desc: "从原型到服务：延迟、成本、可维护性与可复现实验。",
      },
    ],
    projectsTitle: "项目与 Demo",
    projects: [
      {
        year: "2026",
        title: "学术主页（本站）",
        body: "Quiet Scholar 风格的中英双语学术站，支持锚点导航与后续阿里云静态部署。",
        links: [
          { label: "本地预览", href: "#top" },
          { label: "结构说明", href: "#about" },
        ],
      },
      {
        year: "TBD",
        title: "评测基准探索（占位）",
        body: "预留实验、代码与结果摘要位置，可链接论文 PDF、仓库与可复现脚本。",
        links: [
          { label: "Paper", href: "#" },
          { label: "Code", href: "#" },
        ],
      },
      {
        year: "TBD",
        title: "交互式 Demo（占位）",
        body: "适合放模型演示、可视化面板或短视频。申博材料中很加分。",
        links: [
          { label: "Live", href: "#" },
          { label: "Write-up", href: "#" },
        ],
      },
    ],
    pubsTitle: "成果与经历",
    pubsEmpty: "暂无正式发表。结构已预留：论文标题 / venue / 年份 / PDF。",
    timeline: [
      {
        when: "2026 —",
        text: "人工智能研究生 · 建立研究主线与作品集",
      },
      {
        when: "Earlier",
        text: "本科阶段 · 可补充课程、竞赛、实习与开源贡献",
      },
    ],
    contactTitle: "联系",
    contactLead: "欢迎学术交流、合作与申博相关沟通。",
    contact: [
      { label: "Email", href: "mailto:you@example.com" },
      { label: "GitHub", href: "#" },
      { label: "Google Scholar", href: "#" },
      { label: "ORCID", href: "#" },
      { label: "CV PDF", href: "#" },
    ],
    footer: "Quiet Scholar · 面向申博的双语学术主页原型",
  },
  en: {
    brand: "Baohui Wang",
    nav: {
      about: "About",
      research: "Research",
      projects: "Projects",
      pubs: "Work",
      contact: "Contact",
    },
    menu: "Menu",
    close: "Close",
    langSwitch: "中文",
    eyebrow: "Artificial Intelligence · Incoming M.S. · Dalian Minzu University",
    name: "Hi, I'm Baohui Wang",
    subtitle:
      "I study reliable, interpretable, and deployable intelligent systems. This site collects research directions, projects, and PhD application materials.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    portraitAlt: "Academic portrait",
    aboutTitle: "About",
    aboutP1:
      "I am an incoming 2026 graduate student in AI at Dalian Minzu University, advised by Pengjie Wang. I am shaping a long-term research agenda around reliable large models, multimodal understanding, and deployable AI systems.",
    researchTitle: "Research Directions",
    research: [
      {
        num: "01",
        title: "Reliable LLM Systems",
        desc: "Hallucination control, tool use, evaluation protocols, and failure analysis.",
      },
      {
        num: "02",
        title: "Multimodal Understanding",
        desc: "Image-text alignment, structured perception, and research-workflow interfaces.",
      },
      {
        num: "03",
        title: "Deployable AI Applications",
        desc: "From prototype to service: latency, cost, maintainability, and reproducibility.",
      },
    ],
    projectsTitle: "Projects & Demos",
    projects: [
      {
        year: "2026",
        title: "Academic homepage (this site)",
        body: "A Quiet Scholar bilingual academic site with anchor navigation and Alibaba Cloud static-deploy readiness.",
        links: [
          { label: "Local preview", href: "#top" },
          { label: "About structure", href: "#about" },
        ],
      },
      {
        year: "TBD",
        title: "Benchmark exploration (placeholder)",
        body: "Reserved for experiments, code, and result summaries. Can link PDF, repo, and reproduction scripts.",
        links: [
          { label: "Paper", href: "#" },
          { label: "Code", href: "#" },
        ],
      },
      {
        year: "TBD",
        title: "Interactive demo (placeholder)",
        body: "A slot for model demos, visualization panels, or short videos — often valuable for PhD applications.",
        links: [
          { label: "Live", href: "#" },
          { label: "Write-up", href: "#" },
        ],
      },
    ],
    pubsTitle: "Selected Work & Timeline",
    pubsEmpty: "No formal publications yet. Structure reserved for title / venue / year / PDF.",
    timeline: [
      {
        when: "2026 —",
        text: "Graduate study in AI · building research agenda and portfolio",
      },
      {
        when: "Earlier",
        text: "Undergraduate · coursework, contests, internships, open-source contributions",
      },
    ],
    contactTitle: "Contact",
    contactLead: "Open to academic discussion, collaboration, and PhD-related conversations.",
    contact: [
      { label: "Email", href: "mailto:you@example.com" },
      { label: "GitHub", href: "#" },
      { label: "Google Scholar", href: "#" },
      { label: "ORCID", href: "#" },
      { label: "CV PDF", href: "#" },
    ],
    footer: "Quiet Scholar · bilingual academic homepage prototype for PhD outreach",
  },
};

export function App() {
  const [lang, setLang] = useState("zh");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openProject, setOpenProject] = useState(0);
  const t = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page" id="top">
      <header className={`top${scrolled ? " scrolled" : ""}`}>
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); go("top"); }}>
            {t.brand}
          </a>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
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
            <button
              type="button"
              className="lang"
              onClick={() => setLang((v) => (v === "zh" ? "en" : "zh"))}
              aria-label="Switch language"
            >
              {t.langSwitch}
            </button>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? t.close : t.menu}
            </button>
          </div>
        </nav>
        <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
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

      <main>
        <section className="hero">
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
            <img src="/assets/portrait.jpg" alt={t.portraitAlt} width="480" height="600" />
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
                  className="project"
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
                    <span className="project-title">{project.title}</span>
                    <span className="project-year">{project.year}</span>
                  </summary>
                  <div className="project-body">
                    <p>{project.body}</p>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a key={link.label} href={link.href}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        <section id="pubs" className="section">
          <h2>{t.pubsTitle}</h2>
          <div className="empty">{t.pubsEmpty}</div>
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
            {t.contact.map((item) => (
              <a className="chip" key={item.label} href={item.href}>
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
