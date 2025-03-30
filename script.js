// JavaScript (or jQuery) to handle tab switching
document.addEventListener("DOMContentLoaded", function () {
  // Initially show the content of the first tab
  const firstTabContent = document.querySelector('.tab-content');
  if (firstTabContent) {
    firstTabContent.classList.add('active');
  }

  // Get all the tabs
  const tabs = document.querySelectorAll('.navbar a');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove active class from all tabs and content
      tabs.forEach(function(t) {
        t.classList.remove('active');
      });

      // Hide all content sections
      const contentSections = document.querySelectorAll('.tab-content');
      contentSections.forEach(function(content) {
        content.classList.remove('active');
        content.style.display = 'none';
      });

      // Add active class to the clicked tab
      tab.classList.add('active');

      // Show the corresponding content
      const targetContent = document.querySelector(tab.getAttribute('href'));
      if (targetContent) {
        targetContent.classList.add('active');
        targetContent.style.display = 'block';
      }
    });
  });
});
