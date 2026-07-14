/**
 * Site content and personal profile placeholders.
 * Fill profile.* first; bilingual copy is in copy.zh / copy.en.
 */

export const profile = {
  // --- replace these before publishing ---
  email: "a434308421@163.com",
  github: "https://github.com/434308421",
  scholar: "",
  orcid: "",
  cv: "", // put public/cv.pdf here first, then set to "cv.pdf"
  siteUrl: "https://434308421.github.io/resume/",
  // optional socials left empty stay hidden
};

const contactLinks = (lang) => {
  const labels =
    lang === "zh"
      ? {
          email: "Email",
          github: "GitHub",
          scholar: "Google Scholar",
          orcid: "ORCID",
          cv: "CV PDF",
        }
      : {
          email: "Email",
          github: "GitHub",
          scholar: "Google Scholar",
          orcid: "ORCID",
          cv: "CV PDF",
        };

  return [
    {
      id: "email",
      label: labels.email,
      href: profile.email ? `mailto:${profile.email}` : "",
      ready: Boolean(profile.email && !profile.email.includes("example.com")),
    },
    {
      id: "github",
      label: labels.github,
      href: profile.github || "",
      ready: Boolean(profile.github),
    },
    {
      id: "scholar",
      label: labels.scholar,
      href: profile.scholar || "",
      ready: Boolean(profile.scholar),
    },
    {
      id: "orcid",
      label: labels.orcid,
      href: profile.orcid || "",
      ready: Boolean(profile.orcid),
    },
    {
      id: "cv",
      label: labels.cv,
      href: profile.cv ? `${import.meta.env.BASE_URL}${profile.cv.replace(/^\//, "")}` : "",
      ready: Boolean(profile.cv),
    },
  ];
};

export const copy = {
  zh: {
    brand: "王保会",
    docTitle: "王保会 · 人工智能 · 学术主页",
    docDescription:
      "王保会的中英双语学术主页：研究方向、项目与申博材料。大连民族大学人工智能研究生。",
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
    langAria: "切换到英文",
    menuOpenAria: "打开导航菜单",
    menuCloseAria: "关闭导航菜单",
    eyebrow: "人工智能 · 研 0 · 大连民族大学",
    name: "你好，我是王保会",
    subtitle:
      "关注可靠、可解释与可部署的智能系统。这里记录我的研究方向、项目与申博材料。",
    ctaProjects: "查看项目",
    ctaContact: "取得联系",
    portraitAlt: "王保会学术头像",
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
        body: "Quiet Scholar 风格的中英双语学术站，支持锚点导航与 GitHub Pages 静态部署。",
        links: [
          { label: "页面顶部", href: "#top", external: false },
          { label: "关于结构", href: "#about", external: false },
        ],
        ready: true,
      },

    ],
    pubsTitle: "成果与进展",
    pubsEmpty: "正式论文还在积累中。这里会持续放置研究笔记、复现实验、课程项目与可公开材料。",
    pubs: [],
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
    contactHint: "以下链接待补充后自动启用。",
    contactPending: "待补充",
    footer: "王保会 · Quiet Scholar 双语学术主页",
    getContact: () => contactLinks("zh"),
  },
  en: {
    brand: "Baohui Wang",
    docTitle: "Baohui Wang · AI · Academic Homepage",
    docDescription:
      "Bilingual academic homepage of Baohui Wang: research directions, projects, and PhD application materials. Incoming AI graduate student at Dalian Minzu University.",
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
    langAria: "Switch to Chinese",
    menuOpenAria: "Open navigation menu",
    menuCloseAria: "Close navigation menu",
    eyebrow: "Artificial Intelligence · Incoming M.S. · Dalian Minzu University",
    name: "Hi, I'm Baohui Wang",
    subtitle:
      "I study reliable, interpretable, and deployable intelligent systems. This site collects research directions, projects, and PhD application materials.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    portraitAlt: "Academic portrait of Baohui Wang",
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
        body: "A Quiet Scholar bilingual academic site with anchor navigation and GitHub Pages static deployment.",
        links: [
          { label: "Back to top", href: "#top", external: false },
          { label: "About structure", href: "#about", external: false },
        ],
        ready: true,
      },

    ],
    pubsTitle: "Selected Work & Progress",
    pubsEmpty: "Formal publications are still in progress. This section will collect research notes, reproduction work, coursework projects, and public materials.",
    pubs: [],
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
    contactHint: "Links below activate after you fill in profile details.",
    contactPending: "Coming soon",
    footer: "Baohui Wang · Quiet Scholar bilingual academic homepage",
    getContact: () => contactLinks("en"),
  },
};
