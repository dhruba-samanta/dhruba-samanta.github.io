document.addEventListener("DOMContentLoaded", function () {
    // Get all the tabs
    const tabs = document.querySelectorAll('.navbar a');
    const tabContents = document.querySelectorAll('.tab-content');

    // Activate the first tab and content by default
    if (tabs.length > 0 && tabContents.length > 0) {
        tabs[0].classList.add('active');
        tabContents[0].classList.add('active');
    }

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all tabs and content
            tabs.forEach(function(t) {
                t.classList.remove('active');
            });
            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            // Add active class to the clicked tab
            tab.classList.add('active');

            // Show the corresponding content
            const targetContent = document.querySelector(tab.getAttribute('href'));
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});
