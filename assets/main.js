(function () {
  const toast = document.getElementById("toast");

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("show");
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 1200);
  }

  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const value = btn.getAttribute("data-copy") || "";
      if (!value) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () {
          showToast("已复制: " + value);
        }).catch(function () {
          showToast("复制失败，请手动复制");
        });
      } else {
        const input = document.createElement("input");
        input.value = value;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
        showToast("已复制: " + value);
      }
    });
  });

  const timelineItems = document.querySelectorAll(".timeline .item");
  if ("IntersectionObserver" in window && timelineItems.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const idx = Array.prototype.indexOf.call(timelineItems, entry.target);
          setTimeout(function () {
            entry.target.classList.add("in-view");
          }, idx * 120);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    timelineItems.forEach(function (item) { observer.observe(item); });
  } else {
    timelineItems.forEach(function (item) { item.classList.add("in-view"); });
  }

  const modal = document.getElementById("projectModal");
  const modalClose = document.getElementById("modalClose");
  const modalTitle = document.getElementById("modalTitle");
  const modalProblem = document.getElementById("modalProblem");
  const modalSolution = document.getElementById("modalSolution");
  const modalTech = document.getElementById("modalTech");
  const modalResult = document.getElementById("modalResult");

  function openModal(data) {
    if (!modal) return;
    modalTitle.textContent = data.name || "项目详情";
    modalProblem.textContent = data.problem || "";
    modalSolution.textContent = data.solution || "";
    modalTech.textContent = data.tech || "";
    modalResult.textContent = data.result || "";
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll(".open-detail-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal({
        name: btn.getAttribute("data-name"),
        problem: btn.getAttribute("data-problem"),
        solution: btn.getAttribute("data-solution"),
        tech: btn.getAttribute("data-tech"),
        result: btn.getAttribute("data-result")
      });
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  const lastUpdated = document.getElementById("lastUpdated");
  if (lastUpdated) {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    lastUpdated.textContent = y + "-" + m + "-" + d;
  }

  function markActiveNav() {
    const page = document.body.getAttribute("data-page");
    if (!page) return;
    document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-page') === page);
    });
  }

  function syncSectionHeight() {
    const educationScroll = document.getElementById("educationScroll");
    if (!educationScroll) return;
    educationScroll.style.height = "auto";
    const h = educationScroll.scrollHeight;
    if (h > 0) {
      const px = h + "px";
      document.querySelectorAll('[data-sync-height="education"]').forEach(function (el) {
        el.style.height = px;
      });
    }
  }

  function syncHeroPanelHeight() {
    const heroMain = document.querySelector(".hero-main");
    const heroPanel = document.getElementById("heroPanel");
    const heroGrid = document.querySelector(".hero-panel-grid");
    if (!heroMain || !heroPanel) return;
    heroPanel.style.height = "auto";
    const h = Math.ceil(heroMain.getBoundingClientRect().height);
    if (h > 0) {
      heroPanel.style.height = h + "px";
      heroPanel.style.overflow = "hidden";
      if (heroGrid) {
        const gap = 8;
        const rows = 3;
        const kpiH = Math.max(62, Math.floor((h - gap * (rows - 1)) / rows));
        heroGrid.style.setProperty("--hero-kpi-h", kpiH + "px");
      }
    }
  }

  markActiveNav();
  syncSectionHeight();
  syncHeroPanelHeight();
  window.addEventListener("load", syncSectionHeight);
  window.addEventListener("load", syncHeroPanelHeight);
  window.addEventListener("resize", syncSectionHeight);
  window.addEventListener("resize", syncHeroPanelHeight);
  setTimeout(syncSectionHeight, 120);
  setTimeout(syncHeroPanelHeight, 120);
})();
