document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const tabContents = document.querySelectorAll(".tab-content");

  function hideAllSections() {
    tabContents.forEach(section => section.classList.remove("active"));
    navLinks.forEach(link => link.classList.remove("active"));
  }

  // 🔹 Google Analytics tab tracking
  function trackTabView(tabId) {
    if (typeof gtag === "function") {
      gtag("event", "tab_view", {
        tab_name: tabId,
        page_path: "/" + tabId,
        page_title: tabId.charAt(0).toUpperCase() + tabId.slice(1)
      });
    }
  }

  function showSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");

      const activeLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
      if (activeLink) activeLink.classList.add("active");

      // 🔹 Track tab view
      trackTabView(targetId);
    }
  }

  // 🔹 Show tab from URL hash OR fallback to default
  function showInitialTab() {
    const hash = window.location.hash.replace("#", "");
    const initialTab = hash || "about";
    hideAllSections();
    showSection(initialTab);
  }

  // Navbar click handling
  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      hideAllSections();
      showSection(targetId);
      history.pushState(null, "", `#${targetId}`);
    });
  });

  // Initial load
  showInitialTab();

  // Handle back / forward navigation
  window.addEventListener("hashchange", showInitialTab);
});
